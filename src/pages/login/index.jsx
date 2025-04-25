import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { MdEmail, MdLock } from 'react-icons/md';



import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { Container, Title, TitleLogin, SubtitleLogin, ForgetText, CreateText, Wrapper, Column, Row} from './styles';
 
const Login = () => {

    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate("../feed ");
    }

    return ( <>   
     <Header/>
        <Container>
            <Column>
                <Title>
                    A plataforma para você aprender com expertis, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Faça seu cadastro</TitleLogin>
                    <SubtitleLogin>Faça seu login e make the change.</SubtitleLogin>
                    <form>
                        <Input placeholder="E-mail" type="password" leftIcon={<MdEmail/>}/>
                        <Input placeholder="Senha" type="password" leftIcon={<MdLock/>}/>
                        <Button title="Entrar" variant="secondary" onClick={handleClickSignIn} type="Button"></Button>
                    </form>
                    <Row>
                        <ForgetText>Esqueci minha senha</ForgetText>
                        <CreateText>Criar conta</CreateText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Login };