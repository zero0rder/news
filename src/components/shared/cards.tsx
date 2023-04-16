import React, { useState } from "react";
import CardItem from "./card";
import Details from "../details";
import type { DetailPropType } from "./articles";

interface CardsProps {
  articles: DetailPropType[] | undefined;
}

const Cards: React.FC<CardsProps> = ({ articles }) => {
  const [isModalOpen, toggleModal] = useState(false);
  const [detailsData, setDetailsData] = useState<DetailPropType>(
    {} as DetailPropType
  );

  const handleDetailsClick = (obj: DetailPropType) => {
    setDetailsData(obj);
    toggleModal(true);
  };

  return (
    <>
      {articles?.map((a: DetailPropType, i: number) => (
        <CardItem key={i} data={a} handleClick={handleDetailsClick} />
      ))}
      <Details isOpen={isModalOpen} toggle={toggleModal} data={detailsData} />
    </>
  );
};

export default Cards;
