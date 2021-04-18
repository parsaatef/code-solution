import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Box from "@material-ui/core/Box";
import { TabsNavigation } from "./Navigation.styled";
import NavigationItem from "./NavigationItem";

export interface NavItem {
	href: string;
	text: React.ReactNode;
	id: string;
}

interface Props {
	items: NavItem[];
	currentPath: string;
}

const Navigation: React.FC<Props> = (props) => {
	const { items, currentPath } = props;

	const [value, setValue] = React.useState<number | false>(false);

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
					{items.map(({ href, text, id }, index) => (
						<NavigationItem
							key={id}
							href={href}
							text={text}
							index={index}
							setValue={setValue}
							currentPath={currentPath}
						/>
					))}
				</Tabs>
			</TabsNavigation>
		</Box>
	);
};

export default Navigation;
