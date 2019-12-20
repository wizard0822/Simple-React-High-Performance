import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Item from "../Item/Item";
import { connect } from "react-redux";
import "./Bucket.scss";
import { getItemsByBucketId } from "../../store/modules/Bucket/selectors";

const Bucket = props => (
  <div className="bucket-component">
    <div className="bucket-description">
      {props.bucket && props.bucket.description}
    </div>
    <div className="bucket-items">
      {props.bucketItems &&
        props.bucketItems.map(item => (
          <Item key={item.itemId} item={item} />
        ))}{" "}
    </div>
  </div>
);

const mapStateToProps = (state, props) => ({
  bucketItems: getItemsByBucketId()(state, props)
});

Bucket.propTypes = {
  bucket: PropTypes.object.isRequired,
  bucketItems: PropTypes.array.isRequired
};

Bucket.defaultProps = {
  bucket: {
    description: "No Description"
  },
  items: []
};

export default connect(mapStateToProps)(Bucket);
