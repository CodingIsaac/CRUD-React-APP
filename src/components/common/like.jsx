import React, {  Fragment } from "react";

// Boolean like/unliked
// onclick or not clicked
const LikeButton = (props) => {
  
  let likeCLass = "fa fa-heart";
  if (!props.liked) likeCLass += "-o";
  return (
    <Fragment>
      <i
        onClick={props.onClick}
        style={{ cursor: "pointer" }}
        className={likeCLass}
        aria-hidden="true"
      ></i>
    </Fragment>
  );
  };


export default LikeButton;
