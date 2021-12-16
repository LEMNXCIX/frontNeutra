import React from 'react'
import styled from 'styled-components'
import Data from "../Json/Informacion.json"
import { Product } from './Product'

export const Products = () => {
    return (
        <>
        <Title>Productos destacados</Title>
        <Container>
            {Data.popularProducts.map(item=>(
                <Product item = {item} key={item.id}/>
            ))}
        </Container></>
    )
}

const Container = styled.div`
padding: 10px 20px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`;
const Title = styled.h1`
padding-top: 10px;
font-size: 20px;
  color: black;
  letter-spacing: 3px;
  margin: 20px 0px 0px 30px;
`;