import { createSelector } from "reselect";
const getRequestStatus = state => state.common.request_status;

export const getRequestStatusState = createSelector(
    [getRequestStatus],
    RequestStatus => RequestStatus
);