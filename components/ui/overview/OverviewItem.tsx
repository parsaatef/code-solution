import React from "react";
import Box from "@material-ui/core/Box";
import { Grid } from "@material-ui/core";
import { TextCapitalized } from "../../../components/styled/general";

export interface Props {
	title: string;
	value: React.ReactNode;
}

const OverviewItem: React.FC<Props> = (props) => {
	const { value, title } = props;

	return (
		<Box mb={2} data-test="component-overview-item">
			<Grid container>
				<Grid item sm={12} xs={6}>
					<TextCapitalized
						data-test="component-oi-title"
						variant="subtitle2"
						color="textSecondary"
					>
						{title}
					</TextCapitalized>
				</Grid>
				<Grid item sm={12} xs={6} data-test="component-oi-value">
					{value}
				</Grid>
			</Grid>
		</Box>
	);
};

export default OverviewItem;
