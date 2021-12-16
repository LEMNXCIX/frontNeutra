import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { Announcement } from "../components/Announcement";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Newsletter } from "../components/Newsletter";
import { mobile } from "../responsive";

export const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImageContainer>
          <Image src="https://www.cerave.es/-/media/Project/Loreal/BrandSites/CeraVe/Master/Spain/Product/Moisturizers/Moisturizing-cream-16oz.png" />
        </ImageContainer>

        <InfoContainer>
          <Title>Crema hidratante</Title>
          <Description>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. At
            sapiente non magni quod nesciunt itaque temporibus mollitia nulla
            veniam cupiditate ut esse earum, inventore voluptates, porro ipsam
            aliquam? Sequi, nostrum?
          </Description>
          <Price>$20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Cantidad</FilterTitle>
              <FilterOption type="radio" id="250" name="cantidad" />{" "}
              <label for="205">250ml</label>
              <FilterOption type="radio" id="500" name="cantidad" />{" "}
              <label for="500">500ml</label>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <FontAwesomeIcon icon={faMinus}/>
              <Amount>1</Amount>
              <FontAwesomeIcon icon={faPlus}/>
            </AmountContainer>
            <Button>Aniadir al carrito</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};
const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ flexDirection: "column", padding:"20px" })}
`;
const ImageContainer = styled.div`
justify-content: center;
align-items: center;
display: flex;
  flex: 1;
`;
const Image = styled.img`
  width: 50%;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
  ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Description = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;
const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;   
  ${mobile({ width: "100%" })}
 
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
const FilterOption = styled.input`
margin: 0px 5px 0px 20px;
`;
const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  border-radius: 4px;
  &:hover{
      background-color: #f8f4f4;
  }
`;