import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Button from "../index";
Enzyme.configure({ adapter: new EnzymeAdapter() });

describe("<Button /> component tests", () => {
  it("Renders Correctly", () => {
    const wrapper = shallow(<Button />);

    expect(wrapper.length).toBe(1);
  });
  it("If type no prop it should render primary button and text", () => {
    const wrapper = shallow(<Button />);
    const primaryButton = wrapper.find(
      '[data-test="component-button-primary"]'
    );
    const primaryText = wrapper.find('[data-test="component-title-primary"]');

    expect(primaryButton.length).toBe(1);
    expect(primaryText.length).toBe(1);
  });

  it("If type prop is outline renders Text and Button Outline", () => {
    const props = {
      type: "outline",
    };
    const wrapper = shallow(<Button {...props} />);
    const outlinedButton = wrapper.find(
      '[data-test="component-button-outline"]'
    );
    const outlinedText = wrapper.find('[data-test="component-title-outline"]');
    expect(outlinedButton.length).toBe(1);
    expect(outlinedText.length).toBe(1);
  });
  it("It should render Text equal to title prop", () => {
    const props = {
      title: "Test",
    };
    const wrapper = shallow(<Button {...props} />);
    const textComponent = wrapper
      .find('[data-test="component-title-primary"]')
      .contains(props.title);
    expect(textComponent).toBeTruthy();
  });
});
