import React from "react";
import { shallow } from "enzyme";
import App from "./App"; // Import the component we watnt  to test

describe("test my app", () => {
  // test 1
  test("if app is rendered whitout crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBeTruthy(); // Check if the App component exists and is truthy
  });
  //   test 2
  test("check if app render a div whit the class APP-Header", () => {
    const wrapper = shallow(<App />); // we Use find to search for a div with the class "App-header"

    expect(wrapper.find("div.App-header").exists()).toBeTruthy(); // Assert that at least one element with the class "App-header" is found
  });

  // test 3
  test("check if app render a div whit the class App-body", () => {
    const wrapper = shallow(<App />); // we Use find to search for a div with the class "App-body"

    expect(wrapper.find(".App-body").exists()).toBeTruthy();
  });

  // test 4

  test("app footer", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(".App-footer").exists()).toBeTruthy();
  });
});
