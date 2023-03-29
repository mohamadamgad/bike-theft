import React, { useMemo } from "react";
import styled from "styled-components";
import { DatePicker } from "antd";
import { Moment } from "moment";
import debounce from "lodash.debounce";

const { RangePicker } = DatePicker;

const FiltersContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const FilterInput = styled.input`
  width: 350px;
  margin: 0 30px;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  &::placeholder {
    color: #c8c8c8;
    font-size: 14px;
  }
`;

interface FilterProps {
  onTitleFilterChange: (title: string) => void;
  onStartDateFilterChange: (startDate: Moment) => void;
  onEndDateFilterChange: (endDate: Moment) => void;
}

const Filter: React.FC<FilterProps> = ({
  onTitleFilterChange,
  onStartDateFilterChange,
  onEndDateFilterChange,
}) => {
  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onTitleFilterChange(event.target.value);
  };

  const debouncedTitleChange = useMemo(
    () => debounce(handleTitleChange, 400),
    []
  );

  const handleStartDateChange = (date: any | null) => {
    onStartDateFilterChange(date);
  };

  const handleEndDateChange = (date: any | null) => {
    onEndDateFilterChange(date);
  };

  const handleDateSelect = (range: any) => {
    handleStartDateChange(range[0]);
    handleEndDateChange(range[1]);
  };

  return (
    <FiltersContainer>
      <FilterInput
        placeholder="Enter case title"
        onChange={debouncedTitleChange}
        name="title"
      />
      <div>
        <RangePicker
          data-testid="range-picker"
          style={{ width: 350 }}
          onChange={(range) => {
            handleDateSelect(range);
          }}
        />
      </div>
    </FiltersContainer>
  );
};
export default Filter;
