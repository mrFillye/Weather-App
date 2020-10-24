import React, { useState, useEffect } from "react";
import "./App.css";
import Weather from "./components/Weather/Weather";

function getCorsUrl(url) {
  const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  return proxyUrl + url;
}

const url = "https://www.metaweather.com/api/location/2122265";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    fetch(getCorsUrl(url))
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
  }, []);

  if (errors) {
    return <h1>error</h1>;
  } else if (!isLoaded) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div>
        <h3>
          {items.map((item) => (
            <Weather key={item.id} item={item} />
          ))}
        </h3>
      </div>
    );
  }
}
export default App;
