import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import { useRouter } from "next/router";

const HeaderBack = styled(AppBar)`
	background: linear-gradient(45deg, #1c7658 30%, #49b6a2 90%);
	padding: 30px 20px 20px;
`;

export default function Header() {
	const router = useRouter();

	const { serviceId } = router.query;

	console.log("---router.query---", router);
	//router.asPath

	return (
		<HeaderBack position="static">
			<Typography variant="h4">
				{serviceId ? serviceId : "Buorre beaivvi, Guest!e"}
			</Typography>
			<Typography variant="body2">Backstage Service Catalog</Typography>
		</HeaderBack>
	);
}
