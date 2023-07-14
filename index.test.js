import { getTokenID } from "./index.js";

it("validates existence of getTokenID", async () => {
  expect(typeof getTokenID).toBe("function");
});
