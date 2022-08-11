import React from "react";
import Header from "../../components/header";
import fondo from "../../assets/background/background.PNG";
import SearchBar from "../../components/search-bar";
function App() {
  const divStyle = {
    color: "blue",
    backgroundImage: `url(${fondo})`,
  };

  return (
    <>
      <Header />

      <div className=" z-0 bg-cover	 bg-center w-screen	 h-screen " style={divStyle}>
        <div className="z-0  bg-black bg-opacity-60 bg-cover	 m w-screen	 h-screen ">
          <SearchBar />
        </div>
      </div>
    </>
  );
}

export default App;
