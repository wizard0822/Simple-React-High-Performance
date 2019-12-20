import { apiConifg } from "../config/apiConfig";
import axios from "axios";

const fetchBuckets = async () => {
  try {
    const res = await axios(apiConifg.API_BASE_URL + "buckets", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      }
    });
    let { data } = res;
    return { type: "success", data: data };
  } catch (error) {
    return { type: "failed", errorMsg: error };
  }
};
const fetchItems = async () => {
  try {
    const res = await axios(apiConifg.API_BASE_URL + "items", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      }
    });
    let { data } = res;
    return { type: "success", data: data };
  } catch (error) {
    return { type: "failed", errorMsg: error };
  }
};

export { fetchBuckets, fetchItems };
