import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import { Tab } from "@material-ui/core";

export const TabsNavigation = styled(AppBar)`
	background-color: #424242;
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

export const TabMenuItem = styled(Tab)`
	padding: 17px 0;
`;
