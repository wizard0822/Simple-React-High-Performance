import React from "react";
import renderer from "react-test-renderer";

import commonReducer from "../reducer";
import { REQUEST_SENT } from "../types";

const request_status = "request_sent";
/**
 * we can test common reducer as plain JavaScript function.
 */
describe("CommonReducerTest", () => {
    it("should set status", () => {
        const state = { request_status: "request_sent" };
        const newState = commonReducer(state, {
            type: REQUEST_SENT
        });
        expect(newState).toEqual({ request_status });
    });
});