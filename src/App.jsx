import { doc } from "prettier";
import React, { useState, useEffect } from "react";
import "./App.css";
import styled from "styled-components";
import Form from "./components/Form/Form";
import Weather from "./components/Weather/Weather";

const api = {
  key: "69c9d8ad7a4591c202eb160f8bc24c81",
  url: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [items, setItems] = useState({});
  const [errors, setErrors] = useState(null);
  const [query, setQuery] = useState("");

  const getWeather = (e) => {
    fetch(`${api.url}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setItems(result);
          setQuery("");
          console.log(result);
        },
        (errors) => {
          setIsLoaded(true);
          setErrors(errors);
        }
      );
    e.preventDefault();
  };

  return (
    <Container>
      <h1>Weather app</h1>
      <Form
        query={query}
        getWeather={getWeather}
        handleChangeQuery={(e) => setQuery(e.target.value)}
      />
      <Weather items={items} errors={errors} />
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
`;

export default App;
