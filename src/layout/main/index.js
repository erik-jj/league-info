import fondo from "../../assets/background/background.PNG";

export default function MainLayout({ children }) {
  const divStyle = {
    color: "blue",
    backgroundImage: `url(${fondo})`,
  };

  return (
    <>
      <div className="min-h-screen pt-16 overflow-x-hidden  ">
        <main>
          <div
            className="z-0 bg-cover bg-fixed  bg-center w-screen h-screen "
            style={divStyle}
          >
            <div className=" overflow-hidden overflow-y-scroll  z-0 bg-fixed  bg-black bg-opacity-60 bg-cover	 w-screen	h-full">
              <div className="  max-w-7xl mx-auto py-6 sm:px-6 lg:px-6 ">
                {children}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
