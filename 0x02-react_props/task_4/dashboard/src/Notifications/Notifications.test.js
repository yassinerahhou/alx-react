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

it(" menu item is being displayed when displayDrawer is false", () => {
  const wrapper = shallow(<Notifications displayDrawer={false} />);
  expect(wrapper.exists("div.menuItem")).toBe(true);
});
it("Checks that the div.Notifications is not being displayed when displayDrawer is false", () => {
  const NotificationsComp = shallow(<Notifications displayDrawer={false} />);

  expect(NotificationsComp.exists("div.Notifications")).toBe(false);
});
it("Checks that the menu item is being displayed when displayDrawer is true", () => {
  const NotificationsComp = shallow(<Notifications displayDrawer={true} />);

  expect(NotificationsComp.exists("div.menuItem")).toBe(true);
});

it("Checks that the div.Notifications is being displayed when displayDrawer is true", () => {
  const NotificationsComp = shallow(<Notifications displayDrawer={true} />);

  expect(NotificationsComp.exists("div.Notifications")).toBe(true);
});
it("renders this text : 'Here is the list of notifications'", () => {
  const NotificationsComp = shallow(<Notifications displayDrawer={true} />);
  expect(NotificationsComp.find("p").text()).toBe(
    "Here is the list of notifications"
  );
});
