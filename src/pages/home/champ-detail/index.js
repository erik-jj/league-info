import React from "react";
import DetailLayout from "../../../layout/detail";
import Header from "../../../components/header";
import ChampInfo from "../../../components/champ-info";
import Footer from "../../../components/footer";
import ImageViewer from "../../../components/image-viewer";
const ChampDetail = () => {
  return (
    <>
      <Header />
      <DetailLayout>
      <ChampInfo /> 
       <ImageViewer />
      </DetailLayout>
      <Footer />
    </>
  );
};

export default ChampDetail;
