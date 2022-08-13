import fondo from "../../assets/background/background.PNG";

export default function MainLayout({ children }) {
  const divStyle = {
    color: "blue",
    backgroundImage: `url(${fondo})`,
  };

  return (
    <>
      <div className="h-screen pt-16 overflow-x-hidden overflow-y-hidden">
        <div
          className="z-0 bg-cover bg-fixed bg-center w-screen h-screen from-inherit "
          style={divStyle}
        >
          <div className=" overflow-hidden from-inherit overflow-y-scroll z-0 bg-fixed backdrop-blur-sm bg-cover bg-white bg-opacity-5  	w-screen h-screen">
            <div className="  max-w-7xl mx-auto py-10 sm:px-8 lg:px-6 ">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
