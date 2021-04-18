import CheckboxList from "../../containers/checkboxList/CheckboxList";
import ServiceTypeFilter from "../../containers/list/ServiceTypeFilter";
import Grid from "@material-ui/core/Grid";
import { Box } from "@material-ui/core";
import ServicesTableContainer from "../../containers/table/ServicesTableContainer";
import { services } from "../../dummyData/data.json";
import { ServiceModel } from "../../types";
import { MainContent } from "../../components/styled/general";
import { GetStaticProps } from "next";
import { ParsedUrlQuery } from "node:querystring";
import { AppState } from "../../app/reducer";
import Head from "next/head";

const ServicePage = () => {
	return (
		<div>
			<Head>
				<title>Services</title>
			</Head>
			<MainContent>
				<Grid container spacing={4}>
					<Grid item xs={12} sm={3} lg={2}>
						<ServiceTypeFilter />
						<CheckboxList />
					</Grid>
					<Grid item xs={12} sm={9} lg={10}>
						<Box mt="54px">
							<ServicesTableContainer
								data={services as ServiceModel[]}
							/>
						</Box>
					</Grid>
				</Grid>
			</MainContent>
		</div>
	);
};

interface Props {
	initialAppState: AppState;
}

interface Params extends ParsedUrlQuery {}

export const getStaticProps: GetStaticProps<Props, Params> = async () => {
	// Note that in this case we're returning the state directly, without creating
	// the store first (like in /pages/ssr.js), this approach can be better and easier
	return {
		props: {
			initialAppState: {
				favorites: [],
				tagsFilter: [],
				typeFilter: "all",
				search: "",
				services: services as ServiceModel[],
				allServices: services as ServiceModel[],
			},
		},
	};
};

export default ServicePage;
