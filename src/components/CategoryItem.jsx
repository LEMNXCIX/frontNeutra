import React from 'react'
import styled from 'styled-components'
import {mobile} from '../responsive'

export const CategoryItem = ({item}) => {
    return (
        <Container>
            <Image src={item.img} />
            <Info>
                <Title>{item.title}</Title> 
                <Button>Ver ahora</Button>
                </Info> 
               
        </Container>
    )
}
const Container = styled.div`
flex: 1;
margin: 3px;
height: 70vh;
position: relative;
`;
const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
border-radius: 4px;
${mobile({ height: "30vh" })}
`;
const Info = styled.div`
position: absolute;
width: 100%;
height: 100%;
top: 0;
left: 0;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;
const Title = styled.h1`
color: white;
margin-bottom: 20px;
`;
const Button=styled.button`
border: none;
font-size: 20px;
padding: 10px;
background-color: white;
cursor: pointer;
border-radius: 4px;
`;

