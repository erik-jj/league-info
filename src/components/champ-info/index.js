/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { AppContext } from "../application/provider";
const ChampInfo = () => {
  const [champ, setChamp] = useState({});
  const [mostrarLore, setMostrarLore] = useState(false);
  const [state, setState] = useContext(AppContext);
  const location = useLocation();
  const navigate = useNavigate();
  const splitUrl = location.pathname.split("/")[2];
  const obtenerDatos = async () => {
    try {
      const data = await fetch(
        `https://ddragon.leagueoflegends.com/cdn/12.15.1/data/es_MX/champion/${splitUrl}.json`
      );
      const champInfo = await data.json();
      setChamp(Object.values(champInfo.data)[0]);
    } catch (error) {
      navigate("/not-found/");
    }
  };

  useEffect(() => {
    obtenerDatos();
  }, []);

  useEffect(() => {
    document.title = champ?.name;
    setState({ ...state, currentChamp: champ });
  }, [champ]);

  return (
    <>
      {champ?.id !== undefined && (
        <div className="h-full flex flex-col justify-items-center py-16 md:mb-20 mb-10  ">
          <div className="relative ">
            <img
              className="h-auto w-full "
              src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champ?.id}_0.jpg`}
              alt={champ?.id}
            ></img>
            <div className="h-1/2 w-full bg-gradient-to-t from-[#0a0a0c] absolute top-1/2 left-0 "></div>
          </div>
          <div className=" -mt-14 md:-mt-20 lg:-mt-40 mx-auto h-auto w-11/12  flex-row items-center z-10  ">
            <div className="flex flex-col justify-center items-center ">
              <h1 className="h-24 text-4xl lg:text-8xl md:text-6xl text-white  italic tracking-wider font-serif font-bold	">
                {champ?.name}
              </h1>
              <div className="h-auto grid grid-cols-1 lg:grid-cols-2 mx-6">
                <div className="h-auto w-auto  text-white  flex  py-10 tracking-wide italic ">
                  <ul>
                    <li>
                    <span className="w-full md:py-2 py-1 box-border flex ">
                        <p className="mr-4 w-16  "> Ataque: </p>
                        {[...Array(champ.info?.attack)].map((x, i) => (
                          <span
                            key={`info-attack-${i}`}
                            className="my-auto md:h-auto md:w-8 h-4 w-4 mx-1 md:my-1 skew-x-[-24deg] bg-yellow-400 box-border inline-block"
                          />
                        ))}
                      </span>
                    </li>
                    <li>
                      <span className="w-full md:py-2 py-1 box-border flex ">
                        <p className="mr-4  w-16"> Defensa: </p>
                        {[...Array(champ.info?.defense)].map((x, i) => (
                          <span
                            key={`info-defense-${i}`}
                            className="my-auto md:h-auto md:w-8 h-4 w-4 mx-1 md:my-1 skew-x-[-24deg] bg-yellow-400 box-border inline-block"
                          />
                        ))}
                      </span>
                    </li>
                    <span className="w-full md:py-2 py-1 box-border flex ">
                      <p className="mr-4  w-16 "> Magia: </p>
                      {[...Array(champ.info?.magic)].map((x, i) => (
                        <span
                          key={`info-magic-${i}`}
                          className="my-auto md:h-auto md:w-8 h-4 w-4 mx-1 md:my-1 skew-x-[-24deg] bg-yellow-400 box-border inline-block"
                        />
                      ))}
                    </span>
                    <span className="w-full md:py-2 py-1 box-border flex ">
                      <p className="mr-4 w-16"> Dificultad: </p>
                      {[...Array(champ.info?.difficulty)].map((x, i) => (
                        <span
                          key={`info-difficulty-${i}`}
                          className="my-auto md:h-auto md:w-8 h-4 w-4 mx-1 md:my-1 skew-x-[-24deg] bg-yellow-400 box-border inline-block"
                        />
                      ))}
                    </span>
                  </ul>
                </div>
                <div className="h-auto w-auto text-white italic item flex mx-2  py-10">
                  <p>
                    {mostrarLore ? champ?.lore : champ?.blurb}{" "}
                    {mostrarLore ? null : (
                      <button onClick={() => setMostrarLore(true)}>
                        ver más
                      </button>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChampInfo;
