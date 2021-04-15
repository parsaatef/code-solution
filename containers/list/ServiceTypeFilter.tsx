import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import StarIcon from "@material-ui/icons/Star";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import { ListFrame, FilterList } from "./List.styled";
import { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import SettingsIcon from "@material-ui/icons/Settings";
import { useAppState } from "../../app/store";
import { currentUser } from "../../dummyData/data.json";
import { changeTypeFilter } from "../../app/actions";

const FilterListItem = (props) => {
	const { count, Icon, title, id, selectedId, handleClick } = props;

	const [selected, setSelected] = React.useState(false);

	React.useEffect(() => {
		setSelected(id === selectedId);
	}, [id, selectedId]);

	return (
		<ListItem
			onClick={handleClick.bind(null, id)}
			selected={selected}
			button
		>
			{Icon && (
				<ListItemIcon>
					<Icon fontSize="small" />
				</ListItemIcon>
			)}
			<ListItemText primary={title} />
			<ListItemSecondaryAction>{count}</ListItemSecondaryAction>
		</ListItem>
	);
};

const ServiceTypeFilter = () => {
	const { state, dispatch } = useAppState();

	const { allServices, favorites, typeFilter } = state;

	const currentUserServicesLen = React.useMemo(() => {
		return allServices.filter((serv) => serv.owner === currentUser).length;
	}, [allServices]);

	const filters = [
		{
			count: currentUserServicesLen,
			Icon: SettingsIcon,
			title: "Owned",
			id: "owned",
		},
		{
			count: favorites.length,
			Icon: StarIcon,
			title: "Starred",
			id: "starred",
		},
		{
			count: allServices.length,
			Icon: null,
			title: "All",
			id: "all",
		},
	];

	const handleClick = (id) => {
		dispatch(changeTypeFilter(id));
	};

	return (
		<Fragment>
			<Typography variant="h4" gutterBottom>
				Services
			</Typography>
			<ListFrame>
				<FilterList component="nav" aria-label="main mailbox folders">
					{filters.map((filter) => (
						<FilterListItem
							{...filter}
							handleClick={handleClick}
							selectedId={typeFilter}
							key={filter.id}
						/>
					))}
				</FilterList>
			</ListFrame>
		</Fragment>
	);
};

export default ServiceTypeFilter;
