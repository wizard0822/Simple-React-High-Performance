import React from "react";
import { connect } from "react-redux";
import "./Home.scss";
import {
  fetchBuckets,
  fetchItems
} from "../../../store/modules/Bucket/actions";
import Bucket from "../../../components/Bucket/Bucket";
import Loader from "../../../components/Loader/Loader";
import {
  getBucketsState,
  getItemsState,
  getItemsByBucketId
} from "../../../store/modules/Bucket/selectors";
import { getRequestStatusState } from "../../../store/modules/Common/selectors";

/**
 * In this project we can use PureComponent to does a shallow comparison on state change.
 */
class Home extends React.PureComponent {
  componentDidMount() {
    if (!this.props.buckets || this.props.buckets.length < 1) {
      this.props.fetchBucketsFromAPI();
      this.props.fetchItemsFromAPI();
    }
  }
  render() {
    switch (this.props.request_status) {
      case "request_sent":
        return <Loader />;
      case "request_success":
        return (
          <>
            {this.props.buckets.map(bucket => (
              <Bucket key={bucket.bucketId} bucket={bucket} />
            ))}
          </>
        );
      case "request_error":
        return <Error />;
      default:
        return <Loader />;
    }
  }
}

const mapStateToProps = state => ({
  buckets: getBucketsState(state),
  items: getItemsState(state),
  request_status: getRequestStatusState(state),
  bucketItems: getItemsByBucketId(state)
});

const mapDispatchToProps = dispatch => ({
  fetchBucketsFromAPI: () => dispatch(fetchBuckets()),
  fetchItemsFromAPI: () => dispatch(fetchItems())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
