import React from "react";

const ButtonItem = ({props}) => {
  return (
    <>
      <button
        type="button"
        data-bs-target="#carousel"
        data-bs-slide-to={props?.currentNum} //first
        aria-label={props?.next} //next Slide1
        className={props?.mode} //active
        aria-current={props?.current} //true
      ></button>
    </>
  );
};

export default ButtonItem;
