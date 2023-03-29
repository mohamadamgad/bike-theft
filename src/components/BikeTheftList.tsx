import React from "react";

import { BikeTheft } from "../types/BikeTheft";
import BikeTheftItem from "./BikeTheftItem";
import Pagination from "./Pagination";

type Props = {
  thefts: BikeTheft[];
  totalThefts: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

const BikeTheftList: React.FC<Props> = ({
  thefts,
  totalThefts,
  currentPage,
  onPageChange,
}) => {
  const pageSize = 10;
  const totalPages = Math.ceil(totalThefts / pageSize);

  return (
    <>
      <>
        {thefts.map((theft) => (
          <BikeTheftItem key={theft.id} bikeTheft={theft} />
        ))}
      </>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </>
  );
};

export default BikeTheftList;
