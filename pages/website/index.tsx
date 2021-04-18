import { Box, Typography } from "@material-ui/core";
import Head from "next/head";

const Website = () => {
	return (
		<div>
			<Head>
				<title>Websites</title>
			</Head>
			<main>
				<Box mt={5} pl={3}>
					<Typography variant="h3">Websites</Typography>
				</Box>
			</main>
		</div>
	);
};

export default Website;
