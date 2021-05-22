import React from "react";

export const RecentEvent = ({ style, title, discription, imgSrc }) => {
  return (
    <React.Fragment>
      <div className={`card ${style}`}>
        <p className="heading">{title}</p>
        <p>{discription}</p>
        <img src={imgSrc} alt={imgSrc} />
      </div>
    </React.Fragment>
  );
};
