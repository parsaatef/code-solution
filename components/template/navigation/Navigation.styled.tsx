import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import { Tab } from "@material-ui/core";
import { ThemeProps } from "../../../types";

export const TabsNavigation = styled(AppBar)`
	${({ theme }: ThemeProps) => `
		background-color: ${theme.palette.background.paper};
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
	`}
`;

export const TabMenuItem = styled(Tab)`
	padding: 0;
	.MuiTab-wrapper {
		height: 100%;
		a {
			display: block;
			width: 100%;
			height: 100%;
			padding: 17px 0;
		}
	}
`;
