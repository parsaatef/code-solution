import Chip from "@material-ui/core/Chip";
import styled from "styled-components";
import { ThemeProps } from "../../types";

export const TagChip = styled(Chip)`
	margin-right: 4px;
	margin-bottom: 4px;
`;

export const LinkLabel = styled.span`
	${({ theme }: ThemeProps) => `
		color: ${theme.palette.secondary.main};
		cursor: pointer;
	`}
`;
