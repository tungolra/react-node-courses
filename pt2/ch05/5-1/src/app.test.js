// also installed cross-env dep and added "test": "cross-env NODE_ENV=test jest" to package.json to run tests in test env
// also added coverage to jest config in package.json to get coverage report

import request from "supertest";
// import functions we're going to test
import app from "./app";

describe("API Tests", () => {
  it("GET - /dictionary", async () => {
    const { body } = await request(app).get("/dictionary");
    // expect all data coming back from route to equal <# of items in data.json>
    expect(body.length).toEqual(3);
  });
});
