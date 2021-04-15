import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Box from "@material-ui/core/Box";
import Link from "next/link";
import { TabsNavigation, TabMenuItem } from "./Navigation.styled";

export default function SimpleTabs() {
	const [value, setValue] = React.useState(0);

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
						label={<Link href="/service">Services</Link>}
					/>
					<TabMenuItem
						label={<Link href="/website">Websites</Link>}
					/>
					<TabMenuItem
						label={<Link href="/library">Libraries</Link>}
					/>
					<TabMenuItem
						label={
							<Link href="/documentation">Documentations</Link>
						}
					/>
				</Tabs>
			</TabsNavigation>
		</Box>
	);
}
