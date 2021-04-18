import React from "react";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import EnhancedTableHead from "./TableHead";
import { PaperTable, Wrapper, MainTable, TableHeading } from "./Table.styled";
import { Order } from "../../../types";
import { getComparator, stableSort } from "../../../helper/utility";

export type DataRow = Record<string, any>;

export interface TableCol {
	id: string;
	numeric: boolean;
	disablePadding: boolean;
	label: string;
	value: "key" | ((val: DataRow) => React.ReactNode);
	align: "right" | "left" | "center";
}

interface Props {
	toolbar?: React.ReactNode;
	heading: string;
	rows: DataRow[];
	cols: TableCol[];
}

const EnhancedTable: React.FC<Props> = (props) => {
	const { toolbar, heading, rows, cols } = props;

	const [order, setOrder] = React.useState<Order>("asc");
	const [orderBy, setOrderBy] = React.useState<keyof DataRow>("calories");
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(5);

	const handleRequestSort = (
		event: React.MouseEvent<unknown>,
		property: keyof DataRow
	) => {
		const isAsc = orderBy === property && order === "asc";
		setOrder(isAsc ? "desc" : "asc");
		setOrderBy(property);
	};

	const handleChangePage = (event: unknown, newPage: number) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	return (
		<Wrapper>
			<PaperTable>
				<TableHeading
					display="flex"
					justifyContent="space-between"
					alignItems="center"
				>
					<Typography variant="h5" id="tableTitle" component="div">
						{heading}
					</Typography>

					{toolbar}
				</TableHeading>

				<TableContainer>
					<MainTable
						aria-labelledby="tableTitle"
						size="medium"
						aria-label="enhanced table"
					>
						<EnhancedTableHead
							order={order}
							orderBy={orderBy}
							onRequestSort={handleRequestSort}
							cols={cols}
						/>
						<TableBody>
							{stableSort(rows, getComparator(order, orderBy))
								.slice(
									page * rowsPerPage,
									page * rowsPerPage + rowsPerPage
								)
								.map((row) => (
									<TableRow
										hover
										tabIndex={-1}
										key={row.name}
									>
										{cols.map((col, idx) => {
											const {
												id: colId,
												value,
												align,
											} = col;

											const finalVal =
												typeof value === "function"
													? value(row)
													: row[colId];

											if (idx === 0) {
												return (
													<TableCell
														key={colId}
														component="th"
														scope="row"
														padding="default"
														align={align}
													>
														{finalVal}
													</TableCell>
												);
											}
											return (
												<TableCell
													key={colId}
													align={align}
												>
													{finalVal}
												</TableCell>
											);
										})}
									</TableRow>
								))}
						</TableBody>
					</MainTable>
				</TableContainer>
				<TablePagination
					rowsPerPageOptions={[5, 10, 25]}
					component="div"
					count={rows.length}
					rowsPerPage={rowsPerPage}
					page={page}
					onChangePage={handleChangePage}
					onChangeRowsPerPage={handleChangeRowsPerPage}
				/>
			</PaperTable>
		</Wrapper>
	);
};

export default EnhancedTable;
