import React from "react";
import EnhancedTable, { TableCol } from "../../../components/ui/table/Table";
import Grid from "@material-ui/core/Grid";
import { Box } from "@material-ui/core";
import { services } from "../../../dummyData/data.json";
import { useRouter } from "next/router";
import Link from "next/link";
import { LinkLabel } from "../../../containers/table/ServiceTable.styled";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { APIModel, ServiceModel } from "../../../types";
import { ParsedUrlQuery } from "node:querystring";
import Head from "next/head";
import { MainContent } from "../../../components/styled/general";

const columns: TableCol[] = [
	{
		id: "name",
		numeric: false,
		disablePadding: false,
		label: "Name",
		align: "left",
		value: (row) => (
			<Link href={`/service/${row.name}/overview`}>
				<LinkLabel>{row.name}</LinkLabel>
			</Link>
		),
	},
	{
		id: "system",
		numeric: false,
		disablePadding: false,
		label: "System",
		align: "left",
		value: (row) => (
			<Link href={`/system/${row.system}`}>
				<LinkLabel>{row.system}</LinkLabel>
			</Link>
		),
	},
	{
		id: "owner",
		numeric: false,
		disablePadding: false,
		label: "Owner",
		align: "left",
		value: (row) => (
			<Link href={`/owner/${row.owner}`}>
				<LinkLabel>{row.owner}</LinkLabel>
			</Link>
		),
	},
	{
		id: "lifecycle",
		numeric: false,
		disablePadding: false,
		label: "Lifecycle",
		align: "left",
		value: "key",
	},
	{
		id: "type",
		numeric: false,
		disablePadding: false,
		label: "Type",
		align: "left",
		value: "key",
	},
	{
		id: "description",
		numeric: false,
		disablePadding: false,
		label: "Description",
		align: "left",
		value: "key",
	},
];

interface APIsService {
	providedAPIs: APIModel[];
	consumedAPIs: APIModel[];
}

interface Props {
	currentServiceAPI: APIsService;
}

const APIPage: NextPage<Props> = (props) => {
	const { currentServiceAPI } = props;

	const router = useRouter();

	const { serviceId } = router.query;

	const [items, setItems] = React.useState<APIsService>(currentServiceAPI);

	React.useEffect(() => {
		const currService = services.find(
			(service) => service.name === serviceId
		);

		if (currService) {
			setItems({
				providedAPIs: (currService as ServiceModel).providedAPIs,
				consumedAPIs: (currService as ServiceModel).consumedAPIs,
			});
		}
	}, [serviceId]);

	return (
		<div>
			<Head>
				<title>{serviceId} API</title>
			</Head>
			<MainContent>
				<Grid container spacing={4}>
					<Grid item xs={12} lg={6}>
						<Box mt="14px">
							<EnhancedTable
								heading="Provided APIs"
								rows={items.providedAPIs}
								cols={columns}
							/>
						</Box>
					</Grid>
					<Grid item xs={12} lg={6}>
						<Box mt="14px">
							<EnhancedTable
								heading="Consumed APIs"
								rows={items.consumedAPIs}
								cols={columns}
							/>
						</Box>
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
			currentServiceAPI: {
				providedAPIs: currService?.providedAPIs || [],
				consumedAPIs: currService?.consumedAPIs || [],
			},
		},
	};
};

export default APIPage;
