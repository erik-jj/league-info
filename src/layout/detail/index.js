import { useContext } from "react";
import { AppContext } from "../../components/application/provider";

export default function DetailLayout({ children }) {
  const [state] = useContext(AppContext);
  const { currentChamp } = state;
  const divStyle = {
    backgroundImage: `url('http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${currentChamp?.id}_0.jpg')`,
  };

  return (
    <>
      <div className="h-screen  w-screen py-16    overflow-hidden overflow-y-auto  bg-[#0a0a0c] relative flex justify-center  ">
        <div
          style={divStyle}
          className="bg-[#0a0a0c] h-2/5 sm:h-5/6 w-full bg-local bg-cover  bg-center bg-no-repeat blur  top-0 left-0 z-0    "
        ></div>
        <div className="max-w-7xl   overflow-y-hidden  py-10 sm:px-8 lg:px-6  absolute inline-block top-0 z-10  ">
          {children}
        </div>
      </div>
    </>
  );
}
