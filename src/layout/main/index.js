import fondo from "../../assets/background/background.PNG";
import Footer from "../../components/footer";

export default function MainLayout({ children }) {
  const divStyle = {
    color: "blue",
    backgroundImage: `url(${fondo})`,
  };

  return (
    <>
      <div
        className=" h-full w-full  bg-fixed  bg-cover bg-center  overflow-y-hidden mt-16"
        style={divStyle}
      >
        <div className="from-inherit overflow-y-auto z-0 bg-fixed backdrop-blur bg-cover bg-white bg-opacity-5  w-full h-full ">
        <div className="max-w-7xl mx-auto  sm:px-8 lg:px-6  ">
            {children}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
