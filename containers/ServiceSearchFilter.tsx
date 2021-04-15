import React, { useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import { Search } from "@material-ui/icons";
import { useAppState } from "../app/store";
import { searchFilter } from "../app/actions";

const ServiceSearchFilter = () => {
	const { state, dispatch } = useAppState();

	const { search } = state;

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(searchFilter(e.target.value));
	};

	return (
		<TextField
			id="input-with-icon-textfield"
			label="Search Services"
			InputProps={{
				startAdornment: (
					<InputAdornment position="start">
						<Search />
					</InputAdornment>
				),
			}}
			value={search}
			onChange={handleChange}
		/>
	);
};

export default ServiceSearchFilter;
