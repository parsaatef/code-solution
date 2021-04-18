import React from "react";
import { shallow } from "enzyme";
import { findTestEl } from "../../../helper/testUtils";
import OverviewItem, { Props } from "./OverviewItem";

const initialProps = {
	title: "",
	value: "",
};

const setup = (props: Partial<Props> = initialProps) => {
	const finalProps = {
		...initialProps,
		...props,
	};
	return shallow(<OverviewItem {...finalProps} />);
};

describe("OverviewItem Component Unit Test", () => {
	test("renders without error", () => {
		const wrapper = setup();

		const component = findTestEl(wrapper, "component-overview-item");

		expect(component.length).toBe(1);
	});

	test("title prop works correctly", () => {
		const title = "Custom Title";

		const wrapper = setup({
			title,
		});

		const titleEl = findTestEl(wrapper, "component-oi-title");

		expect(titleEl.text()).toBe(title);
	});

	test("value prop works correctly", () => {
		const value = "Custom Title";

		const wrapper = setup({
			value,
		});

		const titleEl = findTestEl(wrapper, "component-oi-value");

		expect(titleEl.text()).toBe(value);
	});
});
