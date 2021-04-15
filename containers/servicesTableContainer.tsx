import EnhancedTable from "../components/ui/table/Table";
import { useAppState } from "../app/store";
import { Fragment, useEffect } from "react";
import ServiceTableActions from "./ServiceTableActions";
import ServiceSearchFilter from "./ServiceSearchFilter";
import { loadServices } from "../app/actions";
import { LinkLabel, TagChip } from "./ServiceTable.styled";
import Link from "next/link";

const columns = [
	{
		id: "name",
		numeric: false,
		disablePadding: false,
		label: "Name",
		align: "left",
		value: (row) => (
			<Link href={`service/${row.name}/overview`}>
				<LinkLabel>{row.name}</LinkLabel>
			</Link>
		),
	},
	{
		id: "system",
		numeric: false,
		disablePadding: false,
		label: "System",
		align: "left",
		value: (row) => (
			<Link href={`system/${row.system}`}>
				<LinkLabel>{row.system}</LinkLabel>
			</Link>
		),
	},
	{
		id: "owner",
		numeric: false,
		disablePadding: false,
		label: "Owner",
		align: "left",
		value: (row) => (
			<Link href={`owner/${row.owner}`}>
				<LinkLabel>{row.owner}</LinkLabel>
			</Link>
		),
	},
	{
		id: "lifecycle",
		numeric: false,
		disablePadding: false,
		label: "Lifecycle",
		align: "left",
		value: "key",
	},
	{
		id: "description",
		numeric: false,
		disablePadding: false,
		label: "Description",
		align: "left",
		value: "key",
	},
	{
		id: "tags",
		numeric: false,
		disablePadding: false,
		label: "Tag",
		align: "left",
		value: (row) => {
			return (
				<Fragment>
					{row.tags.map((tag) => (
						<TagChip size="small" variant="outlined" label={tag} />
					))}
				</Fragment>
			);
		},
	},
	{
		id: "action",
		numeric: false,
		disablePadding: false,
		label: "Action",
		align: "left",
		value: (row) => <ServiceTableActions row={row} />,
	},
];

const filters = [
	{
		title: "Owned",
		id: "owned",
	},
	{
		title: "Starred",
		id: "starred",
	},
	{
		title: "All",
		id: "all",
	},
];

const ServicesTableContainer = (props) => {
	const { data } = props;

	const { state, dispatch } = useAppState();

	console.log("state----", state);

	const { services, typeFilter } = state;

	const currFilter = filters.find((filter) => filter.id === typeFilter);

	const title = currFilter ? currFilter.title : "All";

	useEffect(() => {
		dispatch(loadServices(data));
	}, [data]);

	return (
		<EnhancedTable
			heading={title}
			toolbar={<ServiceSearchFilter />}
			cols={columns}
			rows={services}
		/>
	);
};

export default ServicesTableContainer;
