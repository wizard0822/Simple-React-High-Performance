import React from "react";
import CommonHeader from "../CommonHeader/CommonHeader";
import CommonFooter from "../CommonFooter/CommonFooter";
import "./CommonLayout.scss";

const CommonLayout = props => (
  <div className="body">
    <CommonHeader />
    <div className="contents"> {props.children} </div>
    <CommonFooter />
  </div>
);

export default CommonLayout;
