import { currentUser } from "../dummyData/data.json";

export const servicesByTags = (services, tags) => {
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

export const servicesByType = (services, type, favorites) => {
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

export const servicesBySearch = (services, search) => {
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

export const getFilteredServices = (state) => {
	const { favorites, tagsFilter, typeFilter, search, allServices } = state;

	console.log("---tagsFilter---", tagsFilter, state);

	let filteredServices = servicesByTags(allServices, tagsFilter);
	filteredServices = servicesByType(filteredServices, typeFilter, favorites);
	filteredServices = servicesBySearch(filteredServices, search);

	return filteredServices;
};
