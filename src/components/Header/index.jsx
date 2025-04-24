import React from "react";
import { Button } from "../Button";

import {
    SearchInputContainer,
    Column,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper
} from "./styles";

const Header = () => {
    return (
        <Wrapper>
            <Container>
                <Row> 
                    <img alt="Logo DIO"></img>
                    <SearchInputContainer>
                        <Input placeholder="Buscar..."></Input>
                    </SearchInputContainer>
                    <Menu>Live Code</Menu>
                    <Menu>Global</Menu>
                </Row>
                <Row> 
                    <MenuRight href="#">Home</MenuRight>
                    <Button title="Entrar"></Button>
                    <Button title="Cadastrar"></Button>
                </Row>
            </Container>
        </Wrapper>
    )
}

export { Header };