import { classNames } from "./classNames";

describe("className", () => {
  test("test", () => {
    expect(classNames("someClass")).toBe("someClass");
  });
});
