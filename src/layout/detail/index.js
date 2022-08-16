export default function DetailLayout({ children }) {
  const divStyle = {
    backgroundImage:
      "url('http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg')",
  };
  return (
    <>
      <div className="h-screen py-16  overflow-y-auto  bg-[#0a0a0c] relative flex justify-center">
        <div
           style={divStyle}
          className="h-2/5 sm:h-5/6 w-full bg-local bg-cover  bg-center bg-no-repeat blur  top-0 left-0 z-0 bg-gradient-to-t from-black"
        ></div>

        <div className="max-w-7xl  py-10 sm:px-8 lg:px-6  overflow-hidden overflow-y-hidden  absolute inline-block top-0 z-10">
          {children}
        </div>
      </div>
    </>
  );
}
