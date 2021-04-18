import { Box, Typography } from "@material-ui/core";
import Head from "next/head";

const OwnerDetailPage = () => {
	return (
		<div>
			<Head>
				<title>Owner Detail Page</title>
			</Head>
			<main>
				<Box mt={5} pl={3}>
					<Typography variant="h3">Owner Detail Page</Typography>
				</Box>
			</main>
		</div>
	);
};

export default OwnerDetailPage;
