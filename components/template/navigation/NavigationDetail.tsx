import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import Link from "next/link";
import { TabsNavigation, TabMenuItem } from "./Navigation.styled";

interface Props {
	currentService: string;
}

const NavigationDetail: React.FC<Props> = (props) => {
	const { currentService } = props;

	//const router = useRouter();

	//const { serviceId } = router.query;

	//console.log("---router.query---", router);
	//router.asPath

	const [value, setValue] = React.useState("");

	const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
		setValue(newValue);
	};

	return (
		<Box mb={5}>
			<TabsNavigation position="relative">
				<Tabs
					value={value}
					onChange={handleChange}
					aria-label="simple tabs example"
				>
					<TabMenuItem
						label={
							<Link href={`/service/${currentService}/overview`}>
								Overview
							</Link>
						}
					/>
					<TabMenuItem
						label={
							<Link href={`/service/${currentService}/cicd`}>
								CI/CD
							</Link>
						}
					/>
					<TabMenuItem
						label={
							<Link href={`/service/${currentService}/api`}>
								API
							</Link>
						}
					/>
				</Tabs>
			</TabsNavigation>
		</Box>
	);
};

export default NavigationDetail;
