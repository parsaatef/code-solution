import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import PhoneIcon from "@material-ui/icons/Phone";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import { Divider, Grid } from "@material-ui/core";
import styled from "styled-components";

const OverviewItem = (props) => {
	const { value, title } = props;

	return (
		<Grid container>
			<Grid item sm={12} xs={6}>
				<Typography variant="subtitle1">{title}</Typography>
			</Grid>
			<Grid item sm={12} xs={6}>
				{value}
			</Grid>
		</Grid>
	);
};

interface TabPanelProps {
	children?: React.ReactNode;
	index: any;
	value: any;
}

function TabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`nav-tabpanel-${index}`}
			aria-labelledby={`nav-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

const TabSmall = styled(Tab)`
	max-width: 100px;
	min-width: 100px;
	font-weight: 400;
`;

export default function IconLabelTabs() {
	const [value, setValue] = React.useState(0);

	const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
		setValue(newValue);
	};

	return (
		<Paper>
			<Tabs
				value={value}
				onChange={handleChange}
				indicatorColor="secondary"
				textColor="secondary"
				aria-label="icon label tabs example"
				TabIndicatorProps={{
					style: {
						display: "none",
					},
				}}
			>
				<TabSmall icon={<PhoneIcon />} label="View Source" />
				<TabSmall icon={<FavoriteIcon />} label="View Techdocs" />
				<TabSmall icon={<PersonPinIcon />} label="View API" />
			</Tabs>

			<Divider />

			<TabPanel value={value} index={0}>
				<Grid container>
					<Grid item sm={12}>
						<OverviewItem
							title="Description"
							value="Playback Order"
						/>
					</Grid>
					<Grid item sm={4} xs={12}>
						<OverviewItem title="Owner" value="user:guest" />
					</Grid>
					<Grid item sm={4} xs={12}>
						<OverviewItem title="System" value="audio-playback" />
					</Grid>
					<Grid item sm={4} xs={12}>
						<OverviewItem title="Type" value="Lorem ipsum" />
					</Grid>
					<Grid item sm={4} xs={12}>
						<OverviewItem title="lifecycle" value="production" />
					</Grid>
					<Grid item sm={4} xs={12}>
						<OverviewItem title="tags" value="production" />
					</Grid>
				</Grid>
			</TabPanel>
			<TabPanel value={value} index={1}>
				View Tech Code
			</TabPanel>
			<TabPanel value={value} index={2}>
				View API
			</TabPanel>
		</Paper>
	);
}
