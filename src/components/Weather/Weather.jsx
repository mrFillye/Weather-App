import React, { useState } from "react";

const Weather = ({ item }) => {
  function getRoundNumber(value) {
    return Math.round(value);
  }

  return (
    <div>
      {`${getRoundNumber(item.min_temp)} - ${getRoundNumber(item.max_temp)}`}
      <p>{`${item.weather_state_name}`}</p>
    </div>
  );
};

export default Weather;
