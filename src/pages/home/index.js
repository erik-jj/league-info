import React from "react";
import Navbar from "../../components/navbar";
import fondo from "../../assets/background/background.PNG";
function App() {
  const divStyle = {
    color: "blue",
    backgroundImage: `url(${fondo})`,
  };

  return (
    <>
      <Navbar />

      <div className=" bg-cover	  w-screen	 h-screen " style={divStyle}>
        <div className="bg-black   opacity-70 bg-cover	 m w-screen	 h-screen "></div>
      </div>
    </>
  );
}

export default App;
