import React from "react";
import styled from "styled-components";
import { Navbar } from "../components/Navbar";
import { Announcement } from "../components/Announcement";
import { Products } from "../components/Products";
import { Newsletter } from "../components/Newsletter";
import { Footer } from "../components/Footer";
import { mobile } from "../responsive";

export const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Productos Cosmeticos</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Categorias</FilterText>
          <Select>
            <Options>Piel</Options>
            <Options>Cremas</Options>
            <Options>Mascarillas</Options>
            <Options>Mas cosas</Options>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Ordenar por</FilterText>
          <Select>
            <Options>Precio mas bajo</Options>
            <Options>Precio mas alto</Options>
            <Options>Populares</Options>
            <Options>Mas cosas</Options>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};
const Container = styled.div``;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Title = styled.h1`
  margin: 20px;
`;
const Filter = styled.div`
  margin: 20px;
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;
const Select = styled.select`
padding: 10px;
margin-right: 20px;
border-radius: 4px;
${mobile({ marginTop: "10px" })}
`;
const Options = styled.option``;
