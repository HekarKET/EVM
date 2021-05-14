import React from "react";
import "./style.css";
const Event = ({title,imgSrc}) => {
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <img
        src={imgSrc}
        alt=""
      />
    </React.Fragment>
  );
};

export default Event;
