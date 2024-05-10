import React from "react";
import { shallow } from "enzyme";
import NotificationItem from "./NotificationItem";

describe("NotificationItem", () => {
  it("verify app work whitout crashing", () => {
    const wrapper = shallow(<NotificationItem />);

    expect(wrapper.exists()).toBeTruthy();
  });
  it("Verify that by passing dummy type and value props", () => {
    const wrapper = shallow(<NotificationItem />);
    wrapper.setProps({ type: "default", value: "test" });
    expect(wrapper.html()).toEqual(
      '<li data-notification-type="default">test</li>'
    );
  });
  it("renders the correct html ", () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.html()).toEqual(
      '<li data-notification-type="default">test</li>'
    );
  });
});
