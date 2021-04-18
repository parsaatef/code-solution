import { List } from "@material-ui/core";
import styled from "styled-components";
import { ThemeProps } from "../../types";

export const ListFrame = styled.section`
	background: #2d2d2d;
	padding: 15px;
	border-radius: 4px;
	width: 100%;
	max-width: 360px;
`;

export const FilterList = styled((props) => <List {...props} />)`
	${({ theme }: ThemeProps) => `
		background: ${theme.palette.background.default};
	`}
`;
