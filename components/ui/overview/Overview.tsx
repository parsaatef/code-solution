import React, { Fragment } from "react";
import Tabs from "@material-ui/core/Tabs";
import Box from "@material-ui/core/Box";
import GitHubIcon from "@material-ui/icons/GitHub";
import DescriptionIcon from "@material-ui/icons/Description";
import ExtensionIcon from "@material-ui/icons/Extension";
import { Divider, Grid } from "@material-ui/core";
import Link from "next/link";
import { LinkLabel } from "../../../containers/table/ServiceTable.styled";
import { PaperRelative } from "../../../components/styled/general";
import EditIcon from "@material-ui/icons/Edit";
import OverviewItem from "./OverviewItem";
import TabPanel from "./TabPanel";
import { TabSmall, LightChip } from "./Overview.styled";
import { ServiceModel } from "../../../types";

interface Props {
	details: ServiceModel;
}

const Overview: React.FC<Props> = (props) => {
	const { details } = props;

	const [value, setValue] = React.useState(0);

	const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
		setValue(newValue);
	};

	const { type, owner, system, description, lifecycle, tags } = details;

	return (
		<PaperRelative>
			<Box position="absolute" right="10px" top="10px">
				<EditIcon />
			</Box>

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
				<TabSmall
					icon={<GitHubIcon fontSize="large" />}
					label="View Source"
				/>
				<TabSmall
					icon={<DescriptionIcon fontSize="large" />}
					label="View Techdocs"
				/>
				<TabSmall
					icon={<ExtensionIcon fontSize="large" />}
					label="View API"
				/>
			</Tabs>

			<Divider />

			<TabPanel value={value} index={0}>
				<Grid container>
					<Grid item sm={12}>
						<OverviewItem title="Description" value={description} />
					</Grid>
					<Grid item sm={4} xs={12}>
						<OverviewItem
							title="Owner"
							value={
								<Link href={`/system/${owner}`}>
									<LinkLabel>{owner}</LinkLabel>
								</Link>
							}
						/>
					</Grid>
					<Grid item sm={4} xs={12}>
						<OverviewItem
							title="System"
							value={
								<Link href={`/system/${system}`}>
									<LinkLabel>{system}</LinkLabel>
								</Link>
							}
						/>
					</Grid>
					<Grid item sm={4} xs={12}>
						<OverviewItem title="Type" value={type} />
					</Grid>
					<Grid item sm={4} xs={12}>
						<OverviewItem title="lifecycle" value={lifecycle} />
					</Grid>
					<Grid item sm={4} xs={12}>
						<OverviewItem
							title="tags"
							value={
								<Fragment>
									{tags &&
										tags.map((tag) => (
											<LightChip
												key={tag}
												size="small"
												label={tag}
											/>
										))}
								</Fragment>
							}
						/>
					</Grid>
				</Grid>
			</TabPanel>
			<TabPanel value={value} index={1}>
				View Tech Code
			</TabPanel>
			<TabPanel value={value} index={2}>
				View API
			</TabPanel>
		</PaperRelative>
	);
};

export default Overview;
