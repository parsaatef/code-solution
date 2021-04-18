import React from "react";
import { shallow } from "enzyme";
import { findTestEl } from "../../../helper/testUtils";
import Header, { Props } from "./Header";

const initialProps = {
	title: "",
};

const setup = (props: Partial<Props> = initialProps) => {
	const finalProps = {
		...initialProps,
		...props,
	};
	return shallow(<Header {...finalProps} />);
};

describe("Header Component Unit Test", () => {
	test("renders without error", () => {
		const wrapper = setup();

		const component = findTestEl(wrapper, "component-header");

		expect(component.length).toBe(1);
	});

	test("title prop works correctly", () => {
		const title = "Custom Header Title";

		const wrapper = setup({
			title,
		});

		const titleEl = findTestEl(wrapper, "component-title");

		expect(titleEl.text()).toBe(title);
	});

	test("title prop can be empty", () => {
		const wrapper = setup();

		const titleEl = findTestEl(wrapper, "component-title");

		expect(titleEl.text().length).toBeGreaterThan(0);
	});
});
