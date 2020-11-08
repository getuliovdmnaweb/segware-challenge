import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import ForgotPassword from "../index";
import { findByAttr } from "../../../jest/utils/helpers";

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe("<ForgotPassword /> component tests", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ForgotPassword />);
  });

  it("Renders Correctly", () => {
    expect(wrapper.length).toBe(1);
  });
  it("Renders a Title Component that displays Forgot Password?", () => {
    const titleComponent = findByAttr(wrapper, "component-title");
    const title = titleComponent.contains("Forgot Password?");
    expect(titleComponent.length).toBe(1);
    expect(title).toBeTruthy();
  });
  it("Renders a username Input Component", () => {
    const userNameComponent = findByAttr(wrapper, "component-username-input");
    expect(userNameComponent.length).toBe(1);
  });
  it("Renders a password label Text component", () => {
    const passwordComponent = findByAttr(wrapper, "component-password-label");
    expect(passwordComponent.length).toBe(1);
    const title = passwordComponent.contains("Your Password is:");
    expect(title).toBeTruthy();
  });

  it("Renders a password container text Component", () => {
    const signUpButton = findByAttr(
      wrapper,
      "component-password-container-text"
    );
    expect(signUpButton.length).toBe(1);
  });
  it("Renders a Go Back button  Component", () => {
    const goBackButton = findByAttr(wrapper, "component-go-back-button");
    expect(goBackButton.length).toBe(1);
  });
  it("Renders a get password button  Component", () => {
    const getPassword = findByAttr(wrapper, "component-get-password-button");
    expect(getPassword.length).toBe(1);
  });
});
