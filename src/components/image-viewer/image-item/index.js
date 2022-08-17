import React from "react";

const ImageItem = ({ props }) => {
  console.log(props.id);
  return (
    <>
      <div
        className={`carousel-item ${props?.mode} relative float-left w-full`}
      >
        <img
          src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${props?.id}_${props?.num}.jpg`}
          className="block w-full"
          alt="..."
        />
        <div className="carousel-caption hidden md:block absolute text-center">
          <h5 className="text-xl">First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </div>
      </div>
    </>
  );
};

export default ImageItem;
