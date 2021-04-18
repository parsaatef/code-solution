import { Order } from "../types";

type ComparatorResult = 1 | -1 | 0;

export function descendingComparator<T>(
	a: T,
	b: T,
	orderBy: keyof T
): ComparatorResult {
	if (b[orderBy] < a[orderBy]) {
		return -1;
	}
	if (b[orderBy] > a[orderBy]) {
		return 1;
	}
	return 0;
}

export function getComparator<Key extends keyof any>(
	order: Order,
	orderBy: Key
): (
	a: { [key in Key]: number | string },
	b: { [key in Key]: number | string }
) => ComparatorResult {
	return order === "desc"
		? (a, b): ComparatorResult => descendingComparator(a, b, orderBy)
		: (a, b): ComparatorResult =>
				-descendingComparator(a, b, orderBy) as ComparatorResult;
}

export function stableSort<T>(
	array: T[],
	comparator: (a: T, b: T) => ComparatorResult
) {
	const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
	stabilizedThis.sort((a, b) => {
		const order = comparator(a[0], b[0]);
		if (order !== 0) return order;
		return a[1] - b[1];
	});
	return stabilizedThis.map((el) => el[0]);
}
