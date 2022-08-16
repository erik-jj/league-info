import React, { useEffect, useState } from "react";
import ImageViewer from "../image-viewer";

const ChampInfo = () => {
  const [champ, setChamp] = useState({});
  const divStyle = {
    backgroundImage:
      "url('http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg')",
  };

  const lore =
    "Aatrox y sus hermanos, que alguna vez fueron respetados defensores de Shurima contra el Vacío, se convirtieron en una amenaza aún mayor para Runaterra y los derrotaron con hechicería mortal usada con astucia. Pero, después de siglos de encarcelamiento...";

  useEffect(() => {
    fetch(
      "https://ddragon.leagueoflegends.com/cdn/12.15.1/data/es_MX/champion/Aatrox.json"
    )
      .then((data) => data.json())
      .then((champ) => console.log(champ));
  }, []);

  return (
    <>
      <div className="h-full flex flex-col justify-items-center py-16 mb-40">
        <div className="relative">
          <img
            className="h-auto w-full "
            src="http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg"
            alt=""
          ></img>
          <div className="h-full w-full bg-gradient-to-t from-[#0a0a0c] absolute top-0 left-0 "></div>
        </div>
      
        <div className=" -mt-14 md:-mt-40 mx-auto h-auto w-5/6  flex-row items-center z-10  ">
          <div className="flex flex-col justify-center items-center ">
            <h1 className="h-24 text-4xl md:text-8xl text-white  italic tracking-wider font-serif font-bold	">
              AATROX
            </h1>
            <div className="h-auto grid grid-cols-1 md:grid-cols-2 mx-6">
              <div className="h-auto w-auto  text-white italic flex items-center py-16">
                <ul>
                  <li>
                    <span className=" h-30 w-full  py-2 box-border flex ">
                      <p className="mr-4 w-16 font-bold "> Ataque: </p>
                      <span className="w-6 sm:w-8 mx-1 my-1  skew-x-[-14deg]   bg-yellow-500 box-border inline-block" />
                      <span className="w-6 sm:w-8 mx-1 my-1  skew-x-[-14deg]   bg-yellow-500 box-border inline-block" />
                      <span className="w-6 sm:w-8 mx-1 my-1  skew-x-[-14deg]   bg-yellow-500 box-border inline-block" />
                      <span className="w-6 sm:w-8 mx-1 my-1  skew-x-[-14deg]   bg-yellow-500 box-border inline-block" />
                      <span className="w-6 sm:w-8 mx-1 my-1  skew-x-[-14deg]   bg-yellow-500 box-border inline-block" />
                      <span className="w-6 sm:w-8 mx-1 my-1  skew-x-[-14deg]   bg-yellow-500 box-border inline-block" />
                      <span className="w-6 sm:w-8 mx-1 my-1  skew-x-[-14deg]   bg-yellow-500 box-border inline-block" />
                      <span className="w-6 sm:w-8 mx-1 my-1  skew-x-[-14deg]   bg-yellow-500 box-border inline-block" />
                      <span className="w-6 sm:w-8 mx-1 my-1  skew-x-[-14deg]   bg-yellow-500 box-border inline-block" />
                      <span className="w-6 sm:w-8 mx-1 my-1  skew-x-[-14deg]   bg-yellow-500 box-border inline-block" />
                    </span>
                  </li>
                  <li>
                    <span className=" h-30 w-full  py-2 box-border flex ">
                      <p className="mr-4  w-16 font-bold "> Defensa: </p>
                      <span className="w-6 sm:w-8 mx-1 my-1  skew-x-[-14deg]   bg-yellow-500 box-border inline-block" />
                      <span className="w-6 sm:w-8 mx-1 my-1  skew-x-[-14deg]   bg-yellow-500 box-border inline-block" />
                      <span className="w-6 sm:w-8 mx-1 my-1  skew-x-[-14deg]   bg-yellow-500 box-border inline-block" />
                      <span className="w-6 sm:w-8 mx-1 my-1  skew-x-[-14deg]   bg-yellow-500 box-border inline-block" />
                    </span>
                  </li>
                  <span className=" h-30 w-full  py-2 box-border flex ">
                    <p className="mr-4  w-16 font-bold"> Magia: </p>
                    <span className="w-6 sm:w-8 mx-1 my-1  skew-x-[-14deg]   bg-yellow-500 box-border inline-block" />
                    <span className="w-6 sm:w-8 mx-1 my-1  skew-x-[-14deg]   bg-yellow-500 box-border inline-block" />
                  </span>
                  <span className=" h-30 w-full  py-2 box-border flex ">
                    <p className="mr-4  w-16 font-bold"> Dificultad: </p>
                    <span className="w-6 sm:w-8 mx-1 my-1  skew-x-[-14deg]   bg-yellow-500 box-border inline-block" />
                    <span className="w-6 sm:w-8 mx-1 my-1  skew-x-[-14deg]   bg-yellow-500 box-border inline-block" />
                    <span className="w-6 sm:w-8 mx-1 my-1  skew-x-[-14deg]   bg-yellow-500 box-border inline-block" />
                    <span className="w-6 sm:w-8 mx-1 my-1  skew-x-[-14deg]   bg-yellow-500 box-border inline-block" />
                  </span>
                </ul>
              </div>
              <div className="h-auto w-auto text-white italic item flex items-center mx-10">
                <p>{lore}</p>
              </div>
              
            </div>
           
          </div>

        </div>
     
      </div>
    </>
  );
};

export default ChampInfo;
