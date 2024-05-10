import React from "react";
import { shallow } from "enzyme";
import Header from "./Header.js";

describe("Header", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toBeTruthy();
  });
});

test("Verify that the components render img and h1 tags", () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.find("img")).toHaveLength(1);
  expect(wrapper.find("h1")).toHaveLength(1);
});
