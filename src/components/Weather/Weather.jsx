import React from "react";
import styled from "styled-components";

function Weather({ items, errors }) {
  function getRoundNumber(value) {
    return Math.round(value);
  }

  if (errors) {
    return <div>Error</div>;
  } else {
    return (
      <Container>
        {items.main != undefined ? (
          <div>
            <City>
              {items.name} {items.sys.country}
            </City>
            <Temp>{getRoundNumber(items.main.temp)}°c</Temp>
            <div>{items.weather[0].main}</div>
            <div>Wind speed: {items.wind.speed}</div>
          </div>
        ) : (
          ""
        )}
      </Container>
    );
  }
}

const Container = styled.div`
  margin: 20px;
`;

const City = styled.div`
  font-size: 25px;
  font-weight: bold;
`;

const Temp = styled.div`
  width: 20%;
  background: #f8f8f8;
  padding: 15px 10px;
  margin: 20px auto;
  font-size: 20px;
  border: 0px solid black;
  border-radius: 16px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

export default Weather;
