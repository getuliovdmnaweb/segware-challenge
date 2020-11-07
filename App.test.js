import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "./App";
import { findByAttr } from "./jest/utils/helpers";

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe("<App /> component tests", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  it("Renders Correctly", () => {
    expect(wrapper.length).toBe(1);
  });
  it("Reders a Provider", () => {
    const providerComponent = findByAttr(wrapper, "component-provider");
    expect(providerComponent.length).toBe(1);
  });
  it("Renders a Status Bar", () => {
    const providerComponent = wrapper.find(
      '[data-test="component-status-bar"]'
    );
    expect(providerComponent.length).toBe(1);
  });
  it("Renders the AppNavigator", () => {
    const providerComponent = wrapper.find(
      '[data-test="component-app-navigator"]'
    );
    expect(providerComponent.length).toBe(1);
  });
});
