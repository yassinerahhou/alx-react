import React from "react";
import { shallow } from "enzyme";
import CourseListRow from "./CourseListRow";

describe("CourseListRow Component", () => {
  it("if isHeader = true, The component renders one cell with colspan = 2 when textSecondCell does not exist", () => {
    const wrapper = shallow(
      <CourseListRow isHeader={true} textFirstCell="firstcall" />
    );

    expect(wrapper.find("th")).toHaveLength(1);
    expect(wrapper.find("th").prop("colSpan")).toEqual("2"); // Change to string
    expect(wrapper.find("th").text()).toEqual("firstcall");
  });

  it("should render two header cells when textSecondCell is present", () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={true}
        textFirstCell="firstcall"
        textSecondCell="secondcall"
      />
    );

    expect(wrapper.find("th")).toHaveLength(2);
    expect(wrapper.find("th").first().prop("colSpan")).toEqual(undefined);
    expect(wrapper.find("th").first().text().trim()).toEqual("firstcall"); // Trim the extra space
    expect(wrapper.find("th").last().text()).toEqual("secondcall");
  });

  it("when isHeader is false", () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={false}
        textFirstCell="firstcall"
        textSecondCell="secondcall" // updated comment
      />
    );
    expect(wrapper.find("tr")).toHaveLength(1);
    expect(wrapper.find("th")).toHaveLength(0);
    expect(wrapper.find("td")).toHaveLength(2);
    expect(wrapper.find("td").at(0).text().trim()).toEqual("firstcall");
    expect(wrapper.find("td").at(1).text().trim()).toEqual("secondcall");
  });
});
