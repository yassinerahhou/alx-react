import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";

describe("test my notifications", () => {
  // test 1
  test("if notifications is rendered whitout crashing", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBeTruthy();
  });

  //   test 2

  test("verify that Notifications renders three list items", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find("li").length).toEqual(3); // Check if the Notifications component renders three list items
  });

  // test 3
  test("check html", () => {
    const wrapper = shallow(<Notifications />);
    expect(
      wrapper.contains(<p> Here is the list of notifications</p>)
    ).toBeTruthy();
  });
});
