import React from "react";

import ChampsList from "../../components/champs-list";
import Header from "../../components/header";
import SearchBar from "../../components/search-bar";
import MainLayout from "../../layout/main";

function App() {
  return (
    <>
      <Header />
      <MainLayout>
        <SearchBar />
        <ChampsList />
      </MainLayout>
    </>
  );
}

export default App;
