import { Box, Typography } from "@material-ui/core";
import Head from "next/head";

const SystemDetailPage = () => {
	return (
		<div>
			<Head>
				<title>System Detail Page</title>
			</Head>
			<main>
				<Box mt={5} pl={3}>
					<Typography variant="h3">System Detail Page</Typography>
				</Box>
			</main>
		</div>
	);
};

export default SystemDetailPage;
