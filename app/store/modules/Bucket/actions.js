import { REQUEST_SENT, REQUEST_ERROR, REQUEST_SUCCESS } from "../Common/types";
import { BUCKET_SET, ITEMS_SET } from "./types";
import * as api from "../../../utility/api";

/**
 * Action fetchBuckets fetch buckets from api and then dispatched to store with buckets
 */
const fetchBuckets = () => async dispatch => {
    dispatch({
        type: REQUEST_SENT
    });
    try {
        let res = await api.fetchBuckets();

        if (res.type === "success") {
            dispatch({
                type: BUCKET_SET,
                payload: {
                    buckets: res.data
                }
            });

            dispatch({
                type: REQUEST_SUCCESS
            });
        } else {
            dispatch({
                type: REQUEST_ERROR,
                payload: {
                    errorMsg: res.errorMsg
                }
            });
        }
    } catch (error) {
        dispatch({
            type: REQUEST_ERROR,
            payload: {
                errorMsg: error
            }
        });
    }
};


/**
 * Action fetchItems fetch buckets from api and then dispatched to store with items
 */
const fetchItems = () => async dispatch => {
    dispatch({
        type: REQUEST_SENT
    });
    try {
        let res = await api.fetchItems();
        if (res.type === "success") {
            dispatch({
                type: ITEMS_SET,
                payload: {
                    items: res.data
                }
            });

            dispatch({
                type: REQUEST_SUCCESS
            });
        } else {
            dispatch({
                type: REQUEST_ERROR,
                payload: {
                    errorMsg: res.errorMsg
                }
            });
        }
    } catch (error) {
        dispatch({
            type: REQUEST_ERROR,
            payload: {
                errorMsg: error
            }
        });
    }
};

export { fetchBuckets, fetchItems };