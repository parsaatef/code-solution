import React from "react";
import Typography from "@material-ui/core/Typography";
import { HeaderBack } from "./Header.styled";

export interface Props {
	title: string;
}

const Header: React.FC<Props> = (props) => {
	const { title } = props;

	return (
		<HeaderBack position="static" data-test="component-header">
			<Typography variant="h4" data-test="component-title">
				{title || "Buorre beaivvi, Guest!e"}
			</Typography>
			<Typography variant="body2">Backstage Service Catalog</Typography>
		</HeaderBack>
	);
};

export default Header;
