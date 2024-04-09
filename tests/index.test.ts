import { API_NAME } from "../src/index";
import { describe, expect, it } from "@jest/globals";

describe("chinese-calendar-api", () => {
  it("setup", async () => {
    await expect(API_NAME).toEqual("chinese-calendar-api");
  });
});
