import React from "react";
import { Button } from "../Button";
import { useNavigate } from "react-router-dom";
import Logo from '../../images/logo-dio.png';
import Me from "../../images/Me.png";
import { IHeader } from "./types";

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

const Header = ({authenticated}: IHeader) => {
    const navigate = useNavigate();

    const handleClickHome = () => {
        navigate("../");
    }

    const handleClickLogin = () => {
        navigate("../login");
    }

    const handleClickRegister = () => {
        navigate("../register");
    }


    return (
        <Wrapper>
            <Container>
                <Row> 
                    <img src={Logo} alt="Logo DIO"></img>
                    {authenticated? (
                    <>
                    <SearchInputContainer>
                        <Input placeholder="Buscar..."></Input>
                    </SearchInputContainer>
                    <Menu>Live Code</Menu>
                    <Menu>Global</Menu>
                    </>
                ): null }
                </Row> 
                <Row>
                    <MenuRight onClick={handleClickHome}>Home</MenuRight>
                    <Button title="Entrar" onClick={handleClickLogin} type="Button"></Button>
                    <Button title="Cadastrar" onClick={handleClickRegister} type="Button"></Button>
                </Row>
            </Container>
        </Wrapper>
    )
}

export { Header };