import { ServiceModel } from "../types";
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
	name?: string;
	tag?: string;
	type?: ServiceTypeFilters;
	search?: string;
	data?: ServiceModel[];
}

export type ServiceTypeFilters = "owned" | "starred" | "all";

export type AddToFavoriteAction = {
	type: typeof ADD_TO_FAVORITE;
	payload: Payload;
};

export type RemoveFromFavoriteAction = {
	type: typeof REMOVE_FROM_FAVORITE;
	payload: Payload;
};

export type AddToTagsFilterAction = {
	type: typeof ADD_TO_TAGS_FILTER;
	payload: Payload;
};

export type RemoveFromTagsFilterAction = {
	type: typeof REMOVE_FROM_TAGS_FILTER;
	payload: Payload;
};

export type ChangeTypeFilterAction = {
	type: typeof CHANGE_TYPE_FILTER;
	payload: Payload;
};

export type SearchFilterAction = {
	type: typeof SEARCH_FILTER;
	payload: Payload;
};

export type LoadServicesAction = {
	type: typeof LOAD_SERVICES;
	payload: Payload;
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

export const loadServices = (data: ServiceModel[]): LoadServicesAction => ({
	type: LOAD_SERVICES,
	payload: {
		data,
	},
});
