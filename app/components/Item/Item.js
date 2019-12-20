import React from "react";
import PropTypes from "prop-types";

import "./Item.scss";
const Item = props => (
  <div className="item-component">
    <div className="item-title">{props.item.itemTitle}</div>
    <div className="item-description">{props.item.description}</div>
  </div>
);

Item.propTypes = {
  item: PropTypes.shape({
    itemTitle: PropTypes.string,
    description: PropTypes.string
  })
};

Item.defaultProps = {
  item: {
    itemTitle: "No Title",
    description: "No Description"
  }
};

export default Item;
