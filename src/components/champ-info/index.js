import React, { useEffect, useState } from "react";

const ChampInfo = () => {
  const [champ, setChamp] = useState({});
  const divStyle = {
    backgroundImage:
      "url('http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg')",
  };

  const lore =
    "Aatrox y sus hermanos, que alguna vez fueron respetados defensores de Shurima contra el Vacío, se convirtieron en una amenaza aún mayor para Runaterra y los derrotaron con hechicería mortal usada con astucia. Pero, después de siglos de encarcelamiento, Aatrox fue el primero en encontrar la libertad una vez más; corrompió y transformó a los bastante tontos como para intentar blandir el arma mágica que contenía su esencia. Ahora, con cuerpos robados, camina por Runaterra con una apariencia retorcida de su forma original y busca la venganza apocalíptica que tanto desea.";

  useEffect(() => {
    fetch(
      "https://ddragon.leagueoflegends.com/cdn/12.15.1/data/es_MX/champion/Aatrox.json"
    )
      .then((data) => data.json())
      .then((champ) => console.log(champ));
  }, []);

  return (
    <>
    

      <div className="h-screen flex flex-col justify-items-center py-16 mb-40">
       
          <div className="relative">
            <img
              className="h-auto w-full "
              src="http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg"
              alt=""
            ></img>
            <div className="h-full w-full bg-gradient-to-t from-[#0a0a0c] absolute top-0 left-0 "></div>
          </div>
      
        <div className=" -mt-14 md:-mt-40 mx-auto h-auto w-5/6  flex-row items-center z-10 ">
          <div className="flex flex-col justify-center items-center ">
            <h1 className="h-24 text-4xl md:text-8xl text-white  italic tracking-wider font-serif font-bold	">
              AATROX
            </h1>
            <div className="h-60 grid grid-cols-1 md:grid-cols-2 my-32">
              <div className="h-80 w-auto  text-white italic">
                <ul>
                  <li>Ataque: - - - - - - - - - -</li>
                  <li>Defensa: - - - - - - - - - -</li>
                  <li>Magia: - - - - - - - - - -</li>
                  <li>Dificultad: - - - -</li>
                </ul>
              </div>
              <div className="h-80 w-auto text-white italic " >{lore}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChampInfo;
