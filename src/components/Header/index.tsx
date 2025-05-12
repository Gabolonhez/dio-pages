import React from "react";
import { Button } from "../Button";
import { useNavigate } from "react-router-dom";
import Logo from '../../images/logo-dio.png';
import Me from '../../images/Me.png';
import { AuthContext } from "../../context/auth";
import { useContext } from "react";
import { Link } from "react-router-dom";

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

    const { user, handleSignOut } = useContext(AuthContext);

    return (
        <Wrapper>
            <Container>
                <Row> 
                    <Link to="/">
                    <img src={Logo} alt="Logo DIO"></img>
                    </Link>
                    {user.id? (
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
                    {user.id? (
                    <>
                    <p>{user.name}</p>
                    <UserPicture src={Me} alt="Profile picture"/>   
                    <a href="#" onClick={handleSignOut}>Sair</a>
                    </>
                    ) : (
                    <>
                    <MenuRight onClick={handleClickHome}>Home</MenuRight>
                    <Button title="Entrar" onClick={handleClickLogin} type="Button"></Button>
                    <Button title="Cadastrar" onClick={handleClickRegister} type="Button"></Button>
                    </>
                    )}
                </Row>
            </Container>
        </Wrapper>
    )
}

export { Header };

