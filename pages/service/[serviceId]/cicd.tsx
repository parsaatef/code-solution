import { Box, Typography } from "@material-ui/core";
import Head from "next/head";

const CICDPage = () => {
	return (
		<div>
			<Head>
				<title>CI/CD</title>
			</Head>
			<main>
				<Box mt={5} pl={3}>
					<Typography variant="h3">CI/CD</Typography>
				</Box>
			</main>
		</div>
	);
};

export default CICDPage;
