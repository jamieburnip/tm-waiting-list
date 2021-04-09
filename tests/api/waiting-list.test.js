import { createMocks } from "node-mocks-http";
import handleWaitingList from "../../pages/api/waiting-list";

describe("/api/waiting-list", () => {
  it("returns 404 for GET", async () => {
    const { req, res } = createMocks({
      method: "GET",
    });

    await handleWaitingList(req, res);

    expect(res._getStatusCode()).toBe(404);
  });

  it("returns 400 error with missing email address", async () => {
    const { req, res } = createMocks({
      method: "POST",
      body: {
        emailAddress: "",
        mobileNumber: "07123456789",
      },
    });

    await handleWaitingList(req, res);

    expect(res._getStatusCode()).toBe(400);
    expect(JSON.parse(res._getData())).toEqual({
      status: "error",
      message: "Email and mobile number must be provided",
    });
  });

  it("returns 400 error with missing mobile number", async () => {
    const { req, res } = createMocks({
      method: "POST",
      body: {
        emailAddress: "jamieburnip@gmail.com",
        mobileNumber: "",
      },
    });

    await handleWaitingList(req, res);

    expect(res._getStatusCode()).toBe(400);
    expect(JSON.parse(res._getData())).toEqual({
      status: "error",
      message: "Email and mobile number must be provided",
    });
  });

  it("returns 400 error with an already subscribed email address", async () => {
    const { req, res } = createMocks({
      method: "POST",
      body: {
        emailAddress: "alreadysubscribed@gmail.com",
        mobileNumber: "07123456789",
      },
    });

    await handleWaitingList(req, res);

    expect(res._getStatusCode()).toBe(400);
    expect(JSON.parse(res._getData())).toEqual({
      status: "error",
      message: "You have already been added to the waiting list",
    });
  });

  it("returns 200 success with good data", async () => {
    const { req, res } = createMocks({
      method: "POST",
      body: {
        emailAddress: "jamieburnip@gmail.com",
        mobileNumber: "07123456789",
      },
    });

    await handleWaitingList(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toEqual({ status: "success" });
  });
});
