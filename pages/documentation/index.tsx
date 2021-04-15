import { Box, Typography } from "@material-ui/core";
import Head from "next/head";

const Documentation = () => {
	return (
		<div>
			<Head>
				<title>Documentations</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<Box mt={5} pl={3}>
					<Typography variant="h3">Documentations</Typography>
				</Box>
			</main>
		</div>
	);
};

export default Documentation;
