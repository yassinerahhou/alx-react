import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";

const wrapper = shallow(<Notifications />);

it("renders without crashing", () => {
  shallow(<Notifications />);
});
it("renders three list items", () => {
  expect(wrapper.exists("NotificationItem")).toBe(true);
});
it("renders the <p>", () => {
  expect(
    wrapper.containsMatchingElement(<p>Here is the list of notifications</p>)
  ).toBeTruthy();
});
it(" renders the right html", () => {
  const wrapper = shallow(
    <NotificationItem html={{ __html: "<u>test</u>" }} />
  );
  expect(wrapper.find("li").html()).toEqual("<li><u>test</u></li>");
});
