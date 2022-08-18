import fondo from "../../assets/background/background.PNG";

export default function MainLayout({ children }) {
  const divStyle = {
    color: "blue",
    backgroundImage: `url(${fondo})`,
  };

  return (
    <>
      <div
        className="h-screen w-screen py-16 overflow-x-hidden  overflow-y-hidden  bg-fixed  bg-cover bg-center  "
        style={divStyle}
      >
        <div className="from-inherit  overflow-hidden overflow-y-scroll z-0 bg-fixed backdrop-blur bg-cover bg-white bg-opacity-5  w-screen h-screen">
          <div className="max-w-7xl mx-auto py-10 sm:px-8 lg:px-6 ">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
