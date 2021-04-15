import styled from "styled-components";
import Table from "@material-ui/core/Table";
import Paper from "@material-ui/core/Paper";
import { Box } from "@material-ui/core";

export const PaperTable = styled(Paper)`
	${({ theme }) => `
		width: 100%;
		margin-bottom: ${theme.spacing(2)}px;
	`}
`;

export const TableHeading = styled(Box)`
	padding: 15px;
	border-bottom: 1px solid #fff;
`;

export const Wrapper = styled.div`
	width: 100%;
`;

export const MainTable = styled(Table)`
	min-width: 750px;
`;

export const SortItem = styled.span`
	border: 0;
	clip: rect(0 0 0 0);
	height: 1;
	margin: -1;
	overflow: "hidden";
	padding: 0;
	position: absolute;
	top: 20;
	width: 1;
`;
