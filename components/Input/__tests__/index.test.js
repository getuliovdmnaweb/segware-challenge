import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Input from "../index";
import { findByAttr } from "../../../jest/utils/helpers";
Enzyme.configure({ adapter: new EnzymeAdapter() });

describe("<Button /> component tests", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Input />);
  });
  it("Renders Correctly", () => {
    expect(wrapper.length).toBe(1);
  });

  it("Renders a  Text Input Component ", () => {
    const textInput = findByAttr(wrapper, "component-text-input");

    expect(textInput.length).toBe(1);
  });
  it("Renders a Label Text Component ", () => {
    const labelComponent = findByAttr(wrapper, "component-label");

    expect(labelComponent.length).toBe(1);
  });
  it("Displays label prop passed to component", () => {
    const props = {
      label: "Test",
    };
    const propWrapper = shallow(<Input {...props} />);
    const labelComponent = findByAttr(propWrapper, "component-label");
    const label = labelComponent.contains(props.label);
    expect(label).toBeTruthy();
  });
});
