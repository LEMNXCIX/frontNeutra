import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive';

export const Login = () => {
    return (
        <Container>
        <Wrapper>
          <Title>Inicio de sesion</Title>
          <Form>
            <Input placeholder="Correo electronico" />
            <Input placeholder="Contrasena" />
            <Button>Iniciar sesion</Button>
            <Link>No recuerdas tu contrasena?</Link>
            <Link>Crear nueva cuenta</Link>
          </Form>
        </Wrapper>
      </Container>
    );
};
const Container = styled.div`
  width: 100vw;
  height: 100vh;
 
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
  border-radius: 4px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  border-radius:4px ;
  ${mobile({ width: "100%" })}
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;