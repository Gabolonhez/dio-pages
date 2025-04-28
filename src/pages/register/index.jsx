import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { MdEmail, MdLock, } from 'react-icons/md'; 
import { FaRegUser } from "react-icons/fa";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { useForm, SubmitHandler } from "react-hook-form";

import { api } from "../../services/api";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { Container, Title, TitleLogin, SubtitleLogin, LoginText, TermsText, Wrapper, Column, Row, TextHighlight} from './styles';
 

type FormData = {
    name: string;
    email: string;
    password: string;
};

const schema = yup.object({
    name: yup.string().min(10, 'No mínimo 10 caracteres').required("Nome obrigatório"),
    email: yup.string().email("E-mail inválido").required("E-mail obrigatório"),
    password: yup.string().min(8, 'No mínimo 8 caracteres').required("Senha obrigatória"),
}).required();

const Register = () => {

    const handleClickLogin = () => {
        navigate("../login");
    }

    const navigate = useNavigate();

    const { control, handleSubmit, formState:  {errors, isValid, isSubmitted, isLoading} } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',

    });

    const onSubmit: SubmitHandler<FormData> = async (formData) => {
        try {
            
            const response = await api.post('/users', formData);

            alert("Conta criada com sucesso!");
            console.log("Conta criada com sucesso:", response.data);

            
            navigate('../login');

        } catch (error) { 
            console.error("Registration failed", error);

            if (error.response) {
             
                console.error("Error data:", error.response.data);
                console.error("Error status:", error.response.status);
                console.error("Error headers:", error.response.headers);
               
                alert(`Erro ao criar usuário: ${error.response.data?.message || error.message || 'Detalhes desconhecidos.'}`);
            } else if (error.request) {
           
                console.error("Error request:", error.request);
                alert('Erro de rede: Nenhuma resposta recebida do servidor.');
            } else {
            
                console.error('Error message:', error.message);
                alert(`Erro inesperado: ${error.message}`);
            }
        }
    };

    return ( <>   
     <Header/>
        <Container>
            <Column>
                <Title>
                A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Cadastre-se</TitleLogin>
                    <SubtitleLogin>Crie sua conta e make the change.</SubtitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name="name" errorMessage={errors?.name?.message} control={control} placeholder="Nome" type="text" leftIcon={<FaRegUser/>}/>
                        <Input name="email"  errorMessage={errors?.email?.message} control={control} placeholder="E-mail" type="email" leftIcon={<MdEmail/>}/>
                        <Input name="password"  errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock/>}/>
                        <Button title="Criar conta" variant="secondary"  type="submit" disabled={isLoading || isSubmitted}></Button>
                    </form>
                    <Row>
                        <LoginText onClick={handleClickLogin}>Já tem uma conta? <TextHighlight>Fazer login</TextHighlight></LoginText>
                    </Row>
                    <Row>
                    <TermsText>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</TermsText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Register };