import React from "react";
import "./style.css";
const Event = ({logo,title,content}) => {
  return (
    <React.Fragment>
      <li className="features">
     <span className="feature">
          <img src={logo} alt="snappy-process"/>
          <p>{title}</p>
          <small> {content}
          </small>

        </span>
        </li>
    
    </React.Fragment>
  );
};

export default Event;
