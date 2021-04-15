import EnhancedTable from "../../../components/ui/table/Table";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import { Box } from "@material-ui/core";

const MainContent = styled.section`
	padding: 0 32px;
`;

const APIPage = () => {
	return (
		<MainContent>
			<Grid container spacing={4}>
				<Grid item xs={12} sm={6}>
					<Box mt="14px">
						<EnhancedTable heading="Provided APIs" />
					</Box>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Box mt="14px">
						<EnhancedTable heading="Consumed APIs" />
					</Box>
				</Grid>
			</Grid>
		</MainContent>
	);
};

export default APIPage;
