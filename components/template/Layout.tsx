import React from "react";
import Header from "./header/Header";
import Navigation from "./navigation/Navigation";
import { useRouter } from "next/router";
import NavigationDetail from "./navigation/NavigationDetail";

interface Props {
	children: React.ReactNode;
}

const Layout: React.FC<Props> = (props) => {
	const { children } = props;

	const router = useRouter();

	const { serviceId } = router.query;

	return (
		<div>
			<Header />
			{!serviceId ? (
				<Navigation />
			) : (
				<NavigationDetail currentService={serviceId} />
			)}
			<section>{children}</section>
		</div>
	);
};

export default Layout;
