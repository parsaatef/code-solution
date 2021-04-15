import React from "react";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import EnhancedTableHead from "./TableHead";
import { PaperTable, Wrapper, MainTable, TableHeading } from "./Table.styled";
import TextField from "@material-ui/core/TextField";
import AccountCircle from "@material-ui/icons/AccountCircle";
import InputAdornment from "@material-ui/core/InputAdornment";
import { Search } from "@material-ui/icons";
import { Box } from "@material-ui/core";

function descendingComparator(a, b, orderBy) {
	if (b[orderBy] < a[orderBy]) {
		return -1;
	}
	if (b[orderBy] > a[orderBy]) {
		return 1;
	}
	return 0;
}

function getComparator(order, orderBy) {
	return order === "desc"
		? (a, b) => descendingComparator(a, b, orderBy)
		: (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
	const stabilizedThis = array.map((el, index) => [el, index]);
	stabilizedThis.sort((a, b) => {
		const order = comparator(a[0], b[0]);
		if (order !== 0) return order;
		return a[1] - b[1];
	});
	return stabilizedThis.map((el) => el[0]);
}

export type Order = "asc" | "desc";

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
	const [orderBy, setOrderBy] = React.useState("calories");
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(5);

	const handleRequestSort = (event, property) => {
		const isAsc = orderBy === property && order === "asc";
		setOrder(isAsc ? "desc" : "asc");
		setOrderBy(property);
	};

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	console.log("row----", rows, page);

	/*React.useEffect(() => {
		const pageCount = Math.floor(rows.length / rowsPerPage);
		if (pageCount < page) {
			setPage(pageCount);
		}
	}, [rows]);*/

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
