/**
 * Bucket Selectors
 * In this project we don't need selector but for best practice we used Reselect.
 * getBucketsState selector selects all buckets from store
 * getItems selector selects all items from store
 * We need to pass bucketId to selector for getting items by bucketid. 
 * To do this, we can create selector function getItemsByBucketId * 
 */
import { createSelector } from "reselect";
const getBuckets = state => state.bucket.buckets;
const getItems = state => state.bucket.items;
const getBucketId = (state, props) => props.bucket.bucketId;

export const getBucketsState = createSelector([getBuckets], buckets => buckets);
export const getItemsState = createSelector([getItems], items => items);
export const getItemsByBucketId = () =>
    createSelector([getBucketId, getItems], (bucketId, items) =>
        !items ? [] : items.filter(item => item.bucketId == bucketId)
    );