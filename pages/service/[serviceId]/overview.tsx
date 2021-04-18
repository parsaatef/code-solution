import React from "react";
import { Grid } from "@material-ui/core";
import Head from "next/head";
import Overview from "../../../components/ui/overview/Overview";
import { services } from "../../../dummyData/data.json";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ServiceModel } from "../../../types";
import { ParsedUrlQuery } from "node:querystring";
import { MainContent } from "../../../components/styled/general";

interface Props {
	currentServiceDetail: ServiceModel;
}

const OverviewPage: NextPage<Props> = (props) => {
	const { currentServiceDetail } = props;

	const router = useRouter();

	const { serviceId } = router.query;

	const [details, setDetails] = React.useState(currentServiceDetail);

	React.useEffect(() => {
		const currService = services.find(
			(service) => service.name === serviceId
		);

		if (currService) {
			setDetails({ ...(currService as ServiceModel) });
		}
	}, [serviceId]);

	return (
		<div>
			<Head>
				<title>{serviceId} Overview</title>
			</Head>
			<MainContent>
				<Grid container spacing={5}>
					<Grid item sm={6} xs={12}>
						<Overview details={details} />
					</Grid>
				</Grid>
			</MainContent>
		</div>
	);
};

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: services.map((service) => ({
			params: { serviceId: service.name },
		})),
		fallback: false, // fallback is set to false because we already know the slugs ahead of time
	};
};

interface Params extends ParsedUrlQuery {
	serviceId: string;
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({
	params,
}) => {
	const { serviceId } = params;

	const currService = services.find((service) => service.name === serviceId);

	// Note that in this case we're returning the state directly, without creating
	// the store first (like in /pages/ssr.js), this approach can be better and easier
	return {
		props: {
			currentServiceDetail: { ...(currService as ServiceModel) },
		},
	};
};

export default OverviewPage;
