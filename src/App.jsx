import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [errors, setErrors] = useState(null);

  const getWeather = async () => {
    var proxyUrl = "https://cors-anywhere.herokuapp.com/";
    var url = "https://www.metaweather.com/api/location/2122265";

    await fetch(proxyUrl + url)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.consolidated_weather.splice(0, 1));
          console.log(result);
        },
        (errors) => {
          setIsLoaded(true);
          setErrors(errors);
        }
      );
  };

  useEffect(() => {
    getWeather();
  }, []);

  let key;
  for (key in items) {
    console.log(items[key]);
    const item = items[key];
    const stateName = `${item.weather_state_name}`;
    var humidity = `${item.humidity}`;
    var minTemp = Math.round(`${item.min_temp}`);
    var maxTemp = Math.round(`${item.max_temp}`);
  }

  if (errors) {
    return <h1>error</h1>;
  } else if (!isLoaded) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div>
        <h1>{stateName}</h1>
        <h1>{humidity}</h1>
        <h3>
          {minTemp} - {maxTemp}
        </h3>
      </div>
    );
  }
}

export default App;
