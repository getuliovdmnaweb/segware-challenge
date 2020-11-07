import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Login from "../index";
import { findByAttr } from "../../../jest/utils/helpers";

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe("<Login /> component tests", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Login />);
  });
  it("Renders Correctly", () => {
    expect(wrapper.length).toBe(1);
  });
  it("Renders a Title Component that displays login", () => {
    const titleComponent = findByAttr(wrapper, "component-title");
    expect(titleComponent.length).toBe(1);
    const title = titleComponent.contains("Login");
    expect(title).toBeTruthy();
  });
  it("Renders a username Input Component", () => {
    const userNameComponent = findByAttr(wrapper, "component-username-input");
    expect(userNameComponent.length).toBe(1);
  });
  it("Renders a password input Component", () => {
    const passwordComponent = findByAttr(wrapper, "component-password-input");
    expect(passwordComponent.length).toBe(1);
  });
  it("Renders a forgot password Component", () => {
    const forgotPassword = findByAttr(wrapper, "component-forgot-password");
    expect(forgotPassword.length).toBe(1);
    const text = forgotPassword.contains("Forgot password?");
    expect(text).toBeTruthy();
  });
  it("Renders a sign In button  Component", () => {
    const signInButton = findByAttr(wrapper, "component-sign-in-button");
    expect(signInButton.length).toBe(1);
  });
  it("Renders a sign Up button  Component", () => {
    const signUpButton = findByAttr(wrapper, "component-sign-up-button");
    expect(signUpButton.length).toBe(1);
  });
});
