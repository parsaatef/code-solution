import React, { Fragment } from "react";
import Box from "@material-ui/core/Box";

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number | false;
}

const TabPanel = (props: TabPanelProps) => {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`nav-tabpanel-${index}`}
			aria-labelledby={`nav-tab-${index}`}
			{...other}
		>
			{value === index && <Box p={3}>{children}</Box>}
		</div>
	);
};

export default TabPanel;
