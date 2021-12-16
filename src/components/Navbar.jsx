import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { mobile } from "../responsive";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export function Navbar() {
  //-- se usa una variable para evitar alargar la cadena de texto

  return (
    <>
      <Container>
        <Wrapper>
          <Left>
            <SearchContainer>
              <Input placeholder="Buscar " autocomplete="off" />
              <FontAwesomeIcon
                icon={faSearch}
                style={{ color: "gray", fontSize: 16 }}
              />
            </SearchContainer>
          </Left>
          <Center>
            <Logo>Neutra.</Logo>
          </Center>
          <Right>
            <MenuItems>
              <FontAwesomeIcon icon={faShoppingCart} />
              <Badge>6</Badge>
            </MenuItems>
            <MenuItems>Iniciar Sesion</MenuItems>
          </Right>
        </Wrapper>
      </Container>
    </>
  );
}

const Container = styled.div`
  user-select: none;
  z-index: 5;
  background-color: #ffffffc9;
  height: 60px;
  ${mobile({ heigth: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padd: "10px 0px" })}

`;
const Left = styled.div`
  flex: 1; /* Se usa para distribuir equitativamente cada flex del ancho total */
  display: flex;
  align-items: center;
  ${mobile({ display: "none" })}
`;
const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  border-radius: 5px;


`;
const Input = styled.input`
  border: none;
  outline: none; /*Para quitar el borde al selecionar */
`;

const Center = styled.div`
  flex: 1;
  text-align: left;
`;
const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}

`;
const Right = styled.div`
  flex: 1;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ justifyContent: "center" })}

`;
const MenuItems = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 20px;
  ${mobile({ fontSize: "12px", marginLeft:"10px" })}

`;
const Badge = styled.span`
  background: #d0d94c;
  position: relative;
  height: 10px;
  width: 10px;
  padding: 0px 4px;
  top: -10px;
  left: -5px;
  font-size: 10px;
  border-radius: 50px;
`;
