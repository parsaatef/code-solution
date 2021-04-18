import { Box, Typography } from "@material-ui/core";
import Head from "next/head";

const HomePage = () => {
	return (
		<div>
			<Head>
				<title>Home Page</title>
			</Head>
			<main>
				<Box mt={5} pl={3}>
					<Typography variant="h3">HomePage</Typography>
				</Box>
			</main>
		</div>
	);
};

export default HomePage;
