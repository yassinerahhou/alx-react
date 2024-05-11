import React from "react";
import { shallow } from "enzyme";
import App from "./App";

const wrapper = shallow(<App />);

it("renders without crashing", () => {
  shallow(<App />);
});

it("heck that CourseList is not displayed", () => {
  expect(wrapper.find("CourseList")).toHaveLength(0);
});

it("Checks if 'isLoggedIn === true' the hide <Login /> and show <CourseList />", () => {
  const wrapper = shallow(<App isLoggedIn={true} />);
  expect(wrapper.exists("Login")).toBe(false);
  expect(wrapper.exists("CourseList")).toBe(true);
});
