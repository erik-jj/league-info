import React, { useContext } from "react";
import "tw-elements";
import { AppContext } from "../application/provider";
import ButtonItem from "./button-item";
import ImageItem from "./image-item";

const ImageViewer = () => {
  const [state] = useContext(AppContext);
  const { currentChamp } = state;
  return (
    <>
      <p className="text-white text-5xl font-bold tracking-[0.075em] font-serif text-center mb-6 ">
        Aspectos
      </p>

      <div
        id="carousel"
        className="carousel slide relative"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          {currentChamp?.skins?.map((currentButton, i) => {
            switch (i) {
              case 0:
                return null;
              case 1:
                return (
                  <ButtonItem
                    props={{
                      currentNum: `${i - 1}`,
                      next: `Slide ${i}`,
                      mode: "active",
                      current: "true",
                    }}
                  />
                );

              default:
                return (
                  <ButtonItem
                    props={{
                      currentNum: `${i - 1}`,
                      next: `Slide ${i}`,
                    }}
                  />
                );
            }
          })}
        </div>

        <div className="carousel-inner relative w-full overflow-hidden">
          {currentChamp?.skins?.map((skin, i) => {
            switch (i) {
              case 0:
                return null;
              case 1:
                return (
                  <ImageItem
                    props={{
                      mode: "active",
                      num: skin.num,
                      id: `${currentChamp?.id}`,
                      name: skin.name,
                    }}
                  />
                );
              default:
                return (
                  <ImageItem
                    props={{
                      mode: "",
                      num: skin.num,
                      id: `${currentChamp?.id}`,
                      name: skin.name,
                    }}
                  />
                );
            }
          })}
        </div>

        <button
          className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default ImageViewer;
