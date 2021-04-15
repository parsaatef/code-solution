import {
	ADD_TO_FAVORITE,
	REMOVE_FROM_FAVORITE,
	ADD_TO_TAGS_FILTER,
	REMOVE_FROM_TAGS_FILTER,
	CHANGE_TYPE_FILTER,
	SEARCH_FILTER,
	LOAD_SERVICES,
} from "./constants";
import { AppActions } from "./actions";
import { getFilteredServices } from "./servicesFilter";

export interface AppState {
	username: string;
	isAuth: boolean;
}

const initial = {
	favorites: [],
	tagsFilter: [],
	typeFilter: "all",
	search: "",
	services: [],
	allServices: [],
};

export const initialState =
	typeof window !== "undefined"
		? JSON.parse(window.localStorage.getItem("appData") as string) ||
		  initial
		: initial;

export const reducer = (state = initialState, action: AppActions): AppState => {
	const { type } = action;

	let payload = action.payload;

	const { services, favorites, tagsFilter, typeFilter, search } = state;

	const name = payload.name;
	const tag = payload.tag;
	const fType = payload.type;
	const searchWord = payload.search;
	const data = payload.data;

	let newState;

	switch (type) {
		case ADD_TO_FAVORITE:
			if (favorites.includes(name)) {
				return state;
			}

			return {
				...state,
				favorites: [...favorites, name],
			};

		case REMOVE_FROM_FAVORITE:
			const index = favorites.indexOf(name);

			if (index === -1) {
				return state;
			}

			const newFavorites = [...favorites];

			newFavorites.splice(index, 1);

			newState = {
				...state,
				favorites: newFavorites,
			};

			return {
				...newState,
				services: getFilteredServices(newState),
			};

		case ADD_TO_TAGS_FILTER:
			if (tagsFilter.includes(tag)) {
				return state;
			}

			const newTagsFilter1 = [...tagsFilter, tag];

			newState = {
				...state,
				tagsFilter: newTagsFilter1,
			};

			return {
				...newState,
				services: getFilteredServices(newState),
			};

		case REMOVE_FROM_TAGS_FILTER:
			const idx = tagsFilter.indexOf(tag);

			if (idx === -1) {
				return state;
			}

			const newTagsFilter = [...tagsFilter];

			newTagsFilter.splice(idx, 1);

			newState = {
				...state,
				tagsFilter: newTagsFilter,
			};

			return {
				...newState,
				services: getFilteredServices(newState),
			};

		case CHANGE_TYPE_FILTER:
			if (fType === typeFilter) {
				return state;
			}

			newState = {
				...state,
				typeFilter: fType,
			};

			return {
				...newState,
				services: getFilteredServices(newState),
			};

		case SEARCH_FILTER:
			if (search === searchWord) {
				return state;
			}

			newState = {
				...state,
				search: searchWord,
			};

			return {
				...newState,
				services: getFilteredServices(newState),
			};

		case LOAD_SERVICES:
			newState = {
				...state,
				allServices: data,
			};

			return {
				...newState,
				services: getFilteredServices(newState),
			};

		default:
			return state;
	}
};
