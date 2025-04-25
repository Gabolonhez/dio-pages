import React from "react";
import { Button } from "../Button";
import { useNavigate } from "react-router-dom";
import Logo from '../../images/logo-dio.png';
import Me from "../../images/Me.png";

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

const Header = ({authenticated}) => {
    const navigate = useNavigate();

    const handleClickLogin = () => {
        navigate("../login");
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
                {authenticated ? (
                    <UserPicture src={Me} />
                ) : (
                    <>
                    <MenuRight href="#">Home</MenuRight>
                    <Button title="Entrar" onClick={handleClickLogin} type="Button"></Button>
                    <Button title="Cadastrar" onClick={handleClickLogin} type="Button"></Button>
                    </>
                )}
                </Row>
            </Container>
        </Wrapper>
    )
}

export { Header };