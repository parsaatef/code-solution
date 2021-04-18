import React from "react";
import { mount } from "enzyme";
import { findTestEl } from "../../../helper/testUtils";
import NavigationItem, { Props } from "./NavigationItem";

const initialProps = {
	href: "",
	text: "",
	setValue: jest.fn(),
	index: 0,
	currentPath: "",
};

const setup = (props: Partial<Props> = initialProps) => {
	const finalProps = {
		...initialProps,
		...props,
	};
	return mount(<NavigationItem {...finalProps} />);
};

describe("Navigation Item Component Unit Test", () => {
	let mockSetValue = jest.fn();

	beforeEach(() => {
		mockSetValue.mockClear();
	});

	test("renders without error", () => {
		const wrapper = setup();

		const component = findTestEl(wrapper, "component-nav-item");

		expect(component.length).toBeGreaterThan(0);
	});

	test("text props work correctly", () => {
		const text = "Custom Header Title";

		const wrapper = setup({
			text,
		});

		const linkEl = findTestEl(wrapper, "component-nav-item-link");

		expect(linkEl.text()).toBe(text);
	});

	test("setValue and index props work correctly", () => {
		const index = 2;

		const wrapper = setup({
			setValue: mockSetValue,
			index,
		});

		expect(mockSetValue).toBeCalledTimes(1);
		expect(mockSetValue).toHaveBeenCalledWith(index);
	});

	test("currentPath props work correctly", () => {
		const href = "/service";
		const currentPath = "/news";
		const index = 2;

		const wrapper = setup({
			setValue: mockSetValue,
			index,
			currentPath,
			href,
		});

		expect(mockSetValue).toBeCalledTimes(0);
	});
});
