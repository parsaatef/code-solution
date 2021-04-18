import React from "react";
import { TabMenuItem } from "./Navigation.styled";
import Link from "next/link";

export interface Props {
	href: string;
	text: React.ReactNode;
	setValue: (value: number) => void;
	index: number;
	currentPath: string;
}

const NavigationItem: React.FC<Props> = (props) => {
	const { href, text, setValue, index, currentPath } = props;

	React.useEffect(() => {
		if (href === currentPath) {
			setValue(index);
		}
	}, [href, currentPath]);

	return (
		<TabMenuItem
			data-test="component-nav-item"
			label={
				<Link data-test="component-nav-item-link" href={href}>
					{text}
				</Link>
			}
		/>
	);
};

export default NavigationItem;
