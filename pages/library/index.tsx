import { Box, Typography } from "@material-ui/core";
import Head from "next/head";

const Library = () => {
	return (
		<div>
			<Head>
				<title>Libraries</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<Box mt={5} pl={3}>
					<Typography variant="h3">Libraries</Typography>
				</Box>
			</main>
		</div>
	);
};

export default Library;
