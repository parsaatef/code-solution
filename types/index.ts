import { Theme } from "@material-ui/core/styles";

export interface APIModel {
	name: string;
	system: string;
	owner: string;
	lifecycle: "experimental" | "production";
	description: string;
	type: string;
}

export interface ServiceModel {
	name: string;
	system: string;
	owner: string;
	lifecycle: "experimental" | "production";
	description: string;
	tags: string[];
	type: string;
	providedAPIs: APIModel[];
	consumedAPIs: APIModel[];
}

export type Order = "asc" | "desc";

export interface ThemeProps {
	theme: Theme;
}
