import React from "react";
import styled from "styled-components";
export const Announcement = () => {
  return (
    <Container>
      Oferta!! Obten el 10% de descuesto por compras superiores a $50
    </Container>
  );
};
const Container = styled.div`
  height: 20px;
  background-color: #e2cebd;
  align-items: center;
  display: flex;
  justify-content: center;
  font-size: 10px;
  font-weight: 500;
  margin: 0;
`;


