import React from "react";
import { shallow } from "enzyme";
import CourseListe from "./CourseList";
it("Check that it renders CourseList component without crashing", () => {
  const wrap = <CourseListe />;
  expect(wrap).toBeDefined();
});
it("Check that it renders the 5 different rows", () => {
  const wrap = shallow(<CourseListe />);
  expect(wrap.find("CourseListRow")).toHaveLength(5);
});
