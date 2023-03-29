import React, { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import BikeTheftList from "./BikeTheftList";
import Filter from "./Filter";
import { BikeTheft } from "../types/BikeTheft";
import { fetchBikeThefts } from "../utils/api";

type Props = {};

const ResultsContainer = styled.div`
  margin-top: 20px;
  padding: 0 100px;
`;

const ResultsCount = styled.div`
  font-weight: bold;
  padding: 10px 0;
`;

const ResultState = styled.div`
  display: flex;
  justify-content: center;
`;

const BikeTheftListPage: React.FC<Props> = () => {
  const [thefts, setThefts] = useState<BikeTheft[]>([]);
  const [totalThefts, setTotalThefts] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [titleFilter, setTitleFilter] = useState("");
  const [startDateFilter, setStartDateFilter] = useState("");
  const [endDateFilter, setEndDateFilter] = useState("");

  useEffect(() => {
    setCurrentPage(1);
    setThefts([]);
    setLoading(true);
    fetchBikeThefts(titleFilter, startDateFilter, endDateFilter)
      .then((data) => {
        setThefts(data.bikeThefts);
        setTotalThefts(data.totalCount);
        setLoading(false);
      })
      .catch((error) => {
        setError("Failed to fetch bike thefts! please try again");
        setLoading(false);
      });
  }, [titleFilter, startDateFilter, endDateFilter]);

  const handleTitleFilterChange = (value: string) => {
    setTitleFilter(value);
  };

  const handleStartDateFilterChange = (value: any) => {
    setStartDateFilter(value);
  };

  const handleEndDateFilterChange = (value: any) => {
    setEndDateFilter(value);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const displayedThefts = useMemo(() => {
    let filteredThefts = thefts;

    return filteredThefts.slice(
      (currentPage - 1) * 10,
      (currentPage - 1) * 10 + 10
    );
  }, [currentPage, thefts]);

  return (
    <>
      <Filter
        onTitleFilterChange={handleTitleFilterChange}
        onStartDateFilterChange={handleStartDateFilterChange}
        onEndDateFilterChange={handleEndDateFilterChange}
      />

      <ResultsContainer>
        {!loading && <ResultsCount>Results: {totalThefts}</ResultsCount>}
        <ResultState>
          {loading && <h3>Loading ...</h3>}
          {error && <h3>{error}</h3>}
          {!loading && displayedThefts.length === 0 && <h3>No thefts found</h3>}
        </ResultState>
        {displayedThefts && displayedThefts.length > 0 && (
          <BikeTheftList
            thefts={displayedThefts}
            totalThefts={totalThefts}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        )}
      </ResultsContainer>
    </>
  );
};

export default BikeTheftListPage;
