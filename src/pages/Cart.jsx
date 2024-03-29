import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { Announcement } from "../components/Announcement";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { mobile } from "../responsive";

export const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
      <Wrapper>
        <Title>Tu carrito</Title>
        <Top>
          <TopButton>Continuar comprando</TopButton>
          <TopTexts>
            <TopText>Shopping bag(2)</TopText>
            <TopText>Lista de deseos (0)</TopText>
          </TopTexts>
          <TopButton type="filled">Pagar ahora</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://www.cerave.es/-/media/Project/Loreal/BrandSites/CeraVe/Master/Spain/Product/Moisturizers/Moisturizing-cream-16oz.png" />
                <Details>
                  <ProductName>
                    <b>Nombre:</b> Crema hidratante
                  </ProductName>
                  <ProductId>
                    <b>Id:</b> 45566
                  </ProductId>
                  <ProductSize>
                    <b>Cantidad:</b> 250ml
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <FontAwesomeIcon icon={faPlus} />
                  <ProductAmount>2</ProductAmount>
                  <FontAwesomeIcon icon={faMinus} />
                </ProductAmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetail>
            </Product>

            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://www.cerave.es/-/media/Project/Loreal/BrandSites/CeraVe/Master/Spain/Product/Moisturizers/Moisturizing-cream-16oz.png" />
                <Details>
                  <ProductName>
                    <b>Nombre:</b> Crema hidratante
                  </ProductName>
                  <ProductId>
                    <b>Id:</b> 45566
                  </ProductId>
                  <ProductSize>
                    <b>Cantidad:</b> 250ml
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <FontAwesomeIcon icon={faPlus} />
                  <ProductAmount>2</ProductAmount>
                  <FontAwesomeIcon icon={faMinus} />
                </ProductAmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>Resumen del pedido</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Envío estimado</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Descuento de envío</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <Button>Pagar ahora</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer/>
    </Container>
  );
}; 

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border-radius: 4px;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
 ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 20px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
  margin: 20px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
  ${mobile({ marginTop: "20px" })}
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  border-radius: 4px;
`;
