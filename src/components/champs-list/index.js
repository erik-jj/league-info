import React, { useEffect, useState } from "react";
import ChampItem from "./champ-item";
const ChampsList = () => {
  const [champList, setChampList] = useState([]);

  const ObtenerDatos = async () => {
    const data = await fetch(
      "http://ddragon.leagueoflegends.com/cdn/12.15.1/data/en_US/champion.json"
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
      <div className="grid grid-cols-2 mt-10 gap-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 mx-0 	">
        {champList.map((champ) => (
          <ChampItem props={champ} />
        ))}
      </div>
    </>
  );
};
export default ChampsList;
