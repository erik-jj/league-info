import React from "react";

const ChampItem = ({props}) => {
  return (
    <>
      <div className="rounded-md  border hover:scale-105 border-yellow-400 overflow-hidden  group max-h-96 mx-auto   w-52  sm:w-52  md:w-60 lg:w-60 xl:w-60 flex flex-col justify-center items-center  hover:border-yellow-300  hover:border  hover:cursor-pointer  ">
        <img
          src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${props.id}_0.jpg`}
          alt={props.name}
          className="h-5/6 w-full object-cover object-top "
        ></img>
        <div className="h-1/6 bg-slate-900 w-full flex pl-4 items-center">
          <p className="text-gray-200 text-xl font-bold tracking-wider-wide font-serif 	group-hover:text-yellow-400">
            {props.name}
          </p>
        </div>
      </div>
    </>
  );
};

export default ChampItem;
