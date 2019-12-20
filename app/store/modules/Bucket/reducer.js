import { BUCKET_SET, ITEMS_SET, GET_ITEMS_BY_ID, SET_BUCKET_ID } from "./types";

const initialState = {
    buckets: [],
    items: [],
    errorMsg: ""
};

const bucketReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUCKET_SET:
            return {
                ...state,
                buckets: action.payload.buckets
            };
        case ITEMS_SET:
            return {
                ...state,
                items: action.payload.items
            };
        default:
            return state;
    }
};

export default bucketReducer;