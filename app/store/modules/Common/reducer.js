import { REQUEST_SENT, REQUEST_SUCCESS, REQUEST_ERROR } from "./types";

const initialState = {
    request_status: "",
    errorMsg: ""
};

const commonReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_SENT:
            return {
                ...state,
                request_status: "request_sent"
            };
        case REQUEST_ERROR:
            return {
                ...state,
                request_status: "request_error",
                errorMsg: action.payload.errorMsg
            };
        case REQUEST_SUCCESS:
            return {
                ...state,
                request_status: "request_success"
            };
        default:
            return state;
    }
};

export default commonReducer;