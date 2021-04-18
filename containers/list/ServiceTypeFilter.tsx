import React from "react";
import StarIcon from "@material-ui/icons/Star";
import { ListFrame, FilterList } from "./List.styled";
import { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import SettingsIcon from "@material-ui/icons/Settings";
import { useAppState } from "../../app/store";
import { currentUser } from "../../dummyData/data.json";
import { changeTypeFilter, ServiceTypeFilters } from "../../app/actions";
import FilterListItem from "./FilterListItem";

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

	const handleClick = (id: ServiceTypeFilters) => {
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
