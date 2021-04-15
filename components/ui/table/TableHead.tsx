import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import { Order, TableCol } from "./Table";
import { SortItem } from "./Table.styled";

interface Props {
	onRequestSort: (event: React.MouseEvent, property: string) => void;
	order: Order;
	orderBy: string;
	cols: TableCol[];
}

const EnhancedTableHead: React.FC<Props> = (props) => {
	const { order, orderBy, onRequestSort, cols } = props;
	const createSortHandler = (property: string) => (
		event: React.MouseEvent
	) => {
		onRequestSort(event, property);
	};

	return (
		<TableHead>
			<TableRow>
				{cols.map((headCell) => (
					<TableCell
						key={headCell.id}
						align={headCell.numeric ? "right" : "left"}
						padding={headCell.disablePadding ? "none" : "default"}
						sortDirection={orderBy === headCell.id ? order : false}
					>
						<TableSortLabel
							active={orderBy === headCell.id}
							direction={orderBy === headCell.id ? order : "asc"}
							onClick={createSortHandler(headCell.id)}
						>
							{headCell.label}
							{orderBy === headCell.id ? (
								<SortItem>
									{order === "desc"
										? "sorted descending"
										: "sorted ascending"}
								</SortItem>
							) : null}
						</TableSortLabel>
					</TableCell>
				))}
			</TableRow>
		</TableHead>
	);
};

export default EnhancedTableHead;
