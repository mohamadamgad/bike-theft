import React from "react";
import styled from "styled-components";
import { BikeTheft } from "../types/BikeTheft";
import image from "../assets/bicycle.png";

type Props = {
  bikeTheft: BikeTheft;
};

const BikeTheftItemContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 10px;
`;

const BikeTheftItemImage = styled.img`
  max-width: 100px;
  max-height: 100px;
  margin-right: 10px;
`;

const BikeTheftItemInfoContainer = styled.div`
  flex: 1;
`;

const BikeTheftItemTitle = styled.h2`
  font-size: 1.2rem;
  margin: 0;
`;

const BikeTheftItemDate = styled.p`
  margin: 0;
`;

const BikeTheftItemLocation = styled.p`
  margin: 0;
`;

const BikeTheftItemKey = styled.span`
  font-weight: bold;
`;

const BikeTheftItem: React.FC<Props> = ({ bikeTheft }) => {
  const { title, description, date_stolen, stolen_location, thumb } = bikeTheft;

  return (
    <BikeTheftItemContainer>
      {thumb ? (
        <BikeTheftItemImage src={thumb} alt="Bike theft" />
      ) : (
        <BikeTheftItemImage src={image} alt="Bike theft" />
      )}
      <BikeTheftItemInfoContainer>
        <BikeTheftItemTitle>{title}</BikeTheftItemTitle>
        <BikeTheftItemKey>Description: </BikeTheftItemKey>{" "}
        {description ? description : "description not available"}
        <BikeTheftItemDate>
          <BikeTheftItemKey>Occurred at: </BikeTheftItemKey>
          {new Date(date_stolen * 1000).toLocaleDateString()}
        </BikeTheftItemDate>
        <BikeTheftItemLocation>
          <BikeTheftItemKey>Location: </BikeTheftItemKey> {stolen_location}
        </BikeTheftItemLocation>
      </BikeTheftItemInfoContainer>
    </BikeTheftItemContainer>
  );
};

export default BikeTheftItem;
