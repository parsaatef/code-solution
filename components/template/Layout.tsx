import React from "react";
import Header from "./header/Header";
import Navigation, { NavItem } from "./navigation/Navigation";
import { useRouter } from "next/router";

interface Props {
	children: React.ReactNode;
}

const Layout: React.FC<Props> = (props) => {
	const { children } = props;

	const router = useRouter();

	const { serviceId }: { serviceId?: string } = router.query;

	const currentPath = router.asPath;

	let items: NavItem[] = [];

	if (!serviceId) {
		items = [
			{
				id: "services",
				text: "Services",
				href: `/service`,
			},
			{
				id: "website",
				text: "Websites",
				href: `/website`,
			},
			{
				id: "library",
				text: "Libraries",
				href: `/library`,
			},
			{
				id: "documentation",
				text: "Documentations",
				href: `/documentation`,
			},
		];
	} else {
		items = [
			{
				id: "overview",
				text: "Overview",
				href: `/service/${serviceId}/overview`,
			},
			{
				id: "cicd",
				text: "CI/CD",
				href: `/service/${serviceId}/cicd`,
			},
			{
				id: "api",
				text: "API",
				href: `/service/${serviceId}/api`,
			},
		];
	}

	return (
		<div>
			<Header title={serviceId} />
			<Navigation
				currentPath={currentPath}
				items={items}
				key={!serviceId ? "main" : "detail"}
			/>
			<section>{children}</section>
		</div>
	);
};

export default Layout;
