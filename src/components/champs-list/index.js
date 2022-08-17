import React, { useContext, useEffect, useState } from "react";
import ChampItem from "./champ-item";
import { AppContext } from "../application/provider";

const ChampsList = () => {
  const [champList, setChampList] = useState([]);
  const [state, setState] = useContext(AppContext);
  const { filtro, busqueda } = state;

  const ObtenerDatos = async () => {
    const data = await fetch(
      "http://ddragon.leagueoflegends.com/cdn/12.15.1/data/es_MX/champion.json"
    );
    const lista = await data.json();
    setChampList(Object.values(lista.data));
  };

  useEffect(() => {
    document.title = "Campeones";
    ObtenerDatos();
  }, []);

  return (
    <>
      <div className=" grid grid-cols-2 my-10 gap-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 mx-0 	">
        {champList.map((champ) => {
          if (filtro === "All") {
            return champ.name.toLowerCase().includes(busqueda.toLowerCase()) ? (
              <ChampItem key={`champ-list-${champ.id}`} props={champ} />
            ) : null;
          } else {
            return champ.tags.includes(filtro) ? (
              champ.name.toLowerCase().includes(busqueda.toLowerCase()) ? (
                <ChampItem key={`champ-list-${champ.id}`} props={champ} />
              ) : null
            ) : null;
          }
        })}
      </div>
    </>
  );
};
export default ChampsList;
