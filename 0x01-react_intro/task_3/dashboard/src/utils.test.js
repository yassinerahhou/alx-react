import { getFooterCopy, getFullYear, getLatestNotification } from "./utils";

describe("utils test", () => {
  test("getFullYear to return correct year", () => {
    expect(getFullYear()).toBe(2024);
  });
  test("getFooterCopy to return Holberton School if arg is true", () => {
    expect(getFooterCopy(true)).toBe("Holberton School");
    expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
  });

  test("getLatestNotification", () => {
    expect(getLatestNotification()).toBe(
      "<strong>Urgent requirement</strong> - complete by EOD!"
    );
  });
});
