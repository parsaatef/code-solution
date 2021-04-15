import CheckboxList from "../../containers/checkboxList/CheckboxList";
import ServiceTypeFilter from "../../containers/list/ServiceTypeFilter";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import { Box } from "@material-ui/core";
import ServicesTableContainer from "../../containers/servicesTableContainer";
import { services } from "../../dummyData/data.json";

const MainContent = styled.main`
	padding: 0 32px;
`;

const ServicePage = () => {
	return (
		<MainContent>
			<Grid container spacing={4}>
				<Grid item xs={12} sm={3} lg={2}>
					<ServiceTypeFilter />
					<CheckboxList />
				</Grid>
				<Grid item xs={12} sm={9} lg={10}>
					<Box mt="54px">
						<ServicesTableContainer data={services} />
					</Box>
				</Grid>
			</Grid>
		</MainContent>
	);
};

export default ServicePage;
