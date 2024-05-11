import React from "react";
import { shallow } from "enzyme";
import CourseList from "./CourseList";
it("Check that it renders CourseList component without crashing", () => {
  const wrap = <CourseList />;
  expect(wrap).toBeDefined();
});
it("Check that it renders the 5 different rows", () => {
  const wrap = shallow(<CourseList />);
  expect(wrap.find("CourseListRow")).toHaveLength(5);
});
