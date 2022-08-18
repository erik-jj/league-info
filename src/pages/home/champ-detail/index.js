import React, { useContext } from "react";
import DetailLayout from "../../../layout/detail";
import Header from "../../../components/header";
import ChampInfo from "../../../components/champ-info";
import Footer from "../../../components/footer";
import ImageViewer from "../../../components/image-viewer";
import { AppContext } from "../../../components/application/provider";

const ChampDetail = () => {
  const [state, setState] = useContext(AppContext);
  const { currentChamp } = state;

  return (
    <>
      <Header />
      <DetailLayout>
        <ChampInfo />
        {currentChamp?.id !== undefined && <ImageViewer />}
      </DetailLayout>
      <Footer />
    </>
  );
};

export default ChampDetail;
