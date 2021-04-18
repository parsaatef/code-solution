import { currentUser } from "../dummyData/data.json";
import { ServiceModel } from "../types";
import { ServiceTypeFilters } from "./actions";
import { AppState } from "./reducer";

/**
 * Get services by tags
 * @param services
 * @param tags
 * @returns
 */
export const servicesByTags = (
	services: ServiceModel[],
	tags: string[]
): ServiceModel[] => {
	if (tags.length === 0) {
		return services;
	}

	const newServices = [];

	for (let service of services) {
		let isExistInTags = false;

		for (let tag of service.tags) {
			if (tags.includes(tag)) {
				isExistInTags = true;
				break;
			}
		}

		if (isExistInTags) {
			newServices.push({
				...service,
				tags: [...service.tags],
				providedAPIs: [...service.providedAPIs],
				consumedAPIs: [...service.consumedAPIs],
			});
		}
	}

	return newServices;
};

/**
 * Get services by type
 * @param services
 * @param type
 * @param favorites
 * @returns
 */
export const servicesByType = (
	services: ServiceModel[],
	type: ServiceTypeFilters,
	favorites: ServiceModel["name"][]
): ServiceModel[] => {
	const newServices = [];

	switch (type) {
		case "owned":
			for (let service of services) {
				if (service.owner === currentUser) {
					newServices.push({
						...service,
						tags: [...service.tags],
						providedAPIs: [...service.providedAPIs],
						consumedAPIs: [...service.consumedAPIs],
					});
				}
			}

			break;

		case "starred":
			for (let service of services) {
				if (favorites.includes(service.name)) {
					newServices.push({
						...service,
						tags: [...service.tags],
						providedAPIs: [...service.providedAPIs],
						consumedAPIs: [...service.consumedAPIs],
					});
				}
			}

			break;

		case "all":
		default:
			return services;
	}

	return newServices;
};

/**
 * Get services by search
 * @param services
 * @param search
 * @returns
 */
export const servicesBySearch = (
	services: ServiceModel[],
	search: string
): ServiceModel[] => {
	if (!search) {
		return services;
	}

	const newServices = [];

	const pattern = new RegExp(search, "gi");

	for (let service of services) {
		if (
			pattern.test(service.name) ||
			pattern.test(service.system) ||
			pattern.test(service.owner)
		) {
			newServices.push({
				...service,
				tags: [...service.tags],
				providedAPIs: [...service.providedAPIs],
				consumedAPIs: [...service.consumedAPIs],
			});
		}
	}

	return newServices;
};

/**
 * Filter Services by tags, type and search
 * @param state
 * @returns
 */
export const getFilteredServices = (state: AppState): ServiceModel[] => {
	const { favorites, tagsFilter, typeFilter, search, allServices } = state;

	let filteredServices = servicesByTags(allServices, tagsFilter);
	filteredServices = servicesByType(filteredServices, typeFilter, favorites);
	filteredServices = servicesBySearch(filteredServices, search);

	return filteredServices;
};
