import React from "react";
import { shallow } from "enzyme";
import Login from "./Login";
describe("login", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists()).toBeTruthy();
  });
});
it("the compended render img and h1");
