import { Paper, Typography } from "@material-ui/core";
import styled from "styled-components";
import { ThemeProps } from "../../types";

export const TextCapitalized = styled(Typography)`
	text-transform: uppercase;
`;

export const PaperRelative = styled(Paper)`
	position: relative;
`;

export const WrapperCursor = styled.div`
	cursor: pointer;
`;

export const MainContent = styled.main`
	${({ theme }: ThemeProps) => `
		padding: 0 ${theme.spacing(4)}px;
	`}
`;
