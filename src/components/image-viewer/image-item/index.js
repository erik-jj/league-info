import React from "react";

const ImageItem = ({ props }) => {
  return (
    <>
      <div
        className={`carousel-item ${props?.mode} relative float-left w-full`}
      >
        <div className="h-2/4 w-full bg-gradient-to-t from-[#0a0a0c] absolute top-2/4 left-0  "></div>
        <img
          src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${props?.id}_${props?.num}.jpg`}
          loading="lazy"
          className="block w-full"
          alt="..."
        />
        <div className="carousel-caption  md:block absolute text-center">
          <h5 className="text-lg text-white mx-auto font-serif md:text-4xl ">
            {props?.name}
          </h5>
        </div>
      </div>
    </>
  );
};

export default ImageItem;
