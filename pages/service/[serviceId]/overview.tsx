import { Box, Grid, Typography } from "@material-ui/core";
import Head from "next/head";
import Overview from "../../../components/ui/overview/Overview";

const OverviewPage = () => {
	return (
		<div>
			<Head>
				<title>Overview</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main style={{ padding: "0 32px" }}>
				<Grid container spacing={5}>
					<Grid item sm={6} xs={12}>
						<Overview />
					</Grid>
				</Grid>
			</main>
		</div>
	);
};

export default OverviewPage;
