import {
	ADD_TO_FAVORITE,
	REMOVE_FROM_FAVORITE,
	ADD_TO_TAGS_FILTER,
	REMOVE_FROM_TAGS_FILTER,
	CHANGE_TYPE_FILTER,
	SEARCH_FILTER,
	LOAD_SERVICES,
} from "./constants";

export interface Payload {
	username: string;
}

export type ServiceTypeFilters = "owned" | "starred" | "all";

export type AddToFavoriteAction = {
	type: typeof ADD_TO_FAVORITE;
	payload: {
		name: string;
	};
};

export type RemoveFromFavoriteAction = {
	type: typeof REMOVE_FROM_FAVORITE;
	payload: {
		name: string;
	};
};

export type AddToTagsFilterAction = {
	type: typeof ADD_TO_TAGS_FILTER;
	payload: {
		tag: string;
	};
};

export type RemoveFromTagsFilterAction = {
	type: typeof REMOVE_FROM_TAGS_FILTER;
	payload: {
		tag: string;
	};
};

export type ChangeTypeFilterAction = {
	type: typeof CHANGE_TYPE_FILTER;
	payload: {
		type: ServiceTypeFilters;
	};
};

export type SearchFilterAction = {
	type: typeof SEARCH_FILTER;
	payload: {
		search: string;
	};
};

export type LoadServicesAction = {
	type: typeof LOAD_SERVICES;
	payload: {
		data: [];
	};
};

export type AppActions =
	| LoadServicesAction
	| AddToFavoriteAction
	| RemoveFromFavoriteAction
	| AddToTagsFilterAction
	| RemoveFromTagsFilterAction
	| ChangeTypeFilterAction
	| SearchFilterAction;

export const addToFavorite = (name: string): AddToFavoriteAction => ({
	type: ADD_TO_FAVORITE,
	payload: {
		name,
	},
});

export const removeFromFavorite = (name: string): RemoveFromFavoriteAction => ({
	type: REMOVE_FROM_FAVORITE,
	payload: {
		name,
	},
});

export const addToTagsFilter = (tag: string): AddToTagsFilterAction => ({
	type: ADD_TO_TAGS_FILTER,
	payload: {
		tag,
	},
});

export const removeFromTagsFilter = (
	tag: string
): RemoveFromTagsFilterAction => ({
	type: REMOVE_FROM_TAGS_FILTER,
	payload: {
		tag,
	},
});

export const changeTypeFilter = (
	type: ServiceTypeFilters
): ChangeTypeFilterAction => ({
	type: CHANGE_TYPE_FILTER,
	payload: {
		type,
	},
});

export const searchFilter = (s: string): SearchFilterAction => ({
	type: SEARCH_FILTER,
	payload: {
		search: s,
	},
});

export const loadServices = (data: string[]): LoadServicesAction => ({
	type: LOAD_SERVICES,
	payload: {
		data,
	},
});
