import React from "react";
import ImageViewer from "../../../components/image-viewer";
import DetailLayout from "../../../layout/detail";
import Header from "../../../components/header";
import ChampInfo from "../../../components/champ-info";
import Footer from "../../../components/footer";
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
