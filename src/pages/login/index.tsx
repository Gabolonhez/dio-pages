import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { MdEmail, MdLock } from 'react-icons/md'; 
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useAuth } from '../../hooks/useAuth';
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Container, Title, TitleLogin, SubtitleLogin, ForgetText, CreateText, Wrapper, Column, Row} from './styles';
import { IFormData } from './types';

 
const schema = yup.object({
    email: yup.string().email("E-mail inválido").required("E-mail obrigatório"),
    password: yup.string().min(8, 'No mínimo 8 caracteres').required("Senha obrigatória"),
}).required();

const Login = () => {

    const { handleLogin} = useAuth();

    const handleClickRegister = () => {
        navigate("../register");
    }

    const navigate = useNavigate();

    const { control, handleSubmit, formState:  {errors, isValid, isSubmitted, isLoading} } = useForm<IFormData>({
        resolver: yupResolver(schema),
        mode: 'onChange',

    });

    const onSubmit = async (formData: IFormData) => { 
       handleLogin(formData);
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
                    <TitleLogin>Login</TitleLogin>
                    <SubtitleLogin>Faça seu login e make the change.</SubtitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name="email"  errorMessage={errors?.email?.message} control={control} placeholder="E-mail" type="email" leftIcon={<MdEmail/>}/>
                        <Input name="password"  errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock/>}/>
                        <Button title="Entrar" variant="secondary"  type="submit"></Button>
                    </form>
                    <Row>
                        <ForgetText>Esqueci minha senha</ForgetText>
                        <CreateText onClick={handleClickRegister}>Criar conta</CreateText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Login };