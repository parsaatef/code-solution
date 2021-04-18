import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Fragment } from "react";
import Box from "@material-ui/core/Box";
import { Divider, Typography } from "@material-ui/core";
import { TextCapitalized } from "../../components/styled/general";
import { tags } from "../../dummyData/data.json";
import { useAppState } from "../../app/store";
import { addToTagsFilter, removeFromTagsFilter } from "../../app/actions";
import ControlledCheckBox from "./ControlledCheckBox";

const CheckboxList = () => {
	const { state, dispatch } = useAppState();

	const { tagsFilter } = state;

	const handleToggle = (value: string) => {
		const currentIndex = tagsFilter.indexOf(value);

		if (currentIndex === -1) {
			dispatch(addToTagsFilter(value));
		} else {
			dispatch(removeFromTagsFilter(value));
		}
	};

	return (
		<Fragment>
			<Box display="block" maxWidth="360px" mt={5} marginBottom="0.6rem">
				<Box
					display="flex"
					justifyContent="space-between"
					alignItems="center"
				>
					<Box>
						<Typography variant="subtitle2">
							Refine Results
						</Typography>
					</Box>
					<Box>
						<TextCapitalized variant="subtitle1">
							Clear
						</TextCapitalized>
					</Box>
				</Box>

				<Divider />
			</Box>

			<Typography variant="subtitle2" gutterBottom>
				Tags
			</Typography>

			<List>
				{tags.map((value) => {
					const labelId = `checkbox-list-label-${value}`;

					return (
						<ListItem
							key={value}
							role={undefined}
							dense
							button
							onClick={handleToggle.bind(null, value)}
						>
							<ListItemIcon>
								<ControlledCheckBox
									labelId={labelId}
									defaultChecked={
										tagsFilter.indexOf(value) !== -1
									}
								/>
							</ListItemIcon>
							<ListItemText id={labelId} primary={value} />
						</ListItem>
					);
				})}
			</List>
		</Fragment>
	);
};

export default CheckboxList;
