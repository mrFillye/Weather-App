import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Form = ({ handleChangeQuery, query, getWeather }) => {
  return (
    <Container>
      <form onSubmit={getWeather}>
        <Search
          type="text"
          placeholder="search..."
          onChange={handleChangeQuery}
          value={query}
        />
        <Btn>Get weather</Btn>
      </form>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

const Search = styled.input`
  background: #f8f8f8;
  padding: 10px;
  outline: none;
  font-size: 20px;
  color: #313131;
  border: none;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
`;

const Btn = styled.button`
  border: none;
  outline: none;
  font-size: 15px;
  padding: 10px;
  margin: 5px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
`;

export default Form;
