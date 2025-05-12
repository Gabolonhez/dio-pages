import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IAuthContext, IAuthContextProviderProps, ILoginData } from './types';
import { IUser } from '../types/user';
import { api } from "../services/api";

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthContextProvider =  ({children}: IAuthContextProviderProps) => {
    const navigate = useNavigate();

    const [user, setUser] = useState<IUser>({} as IUser);
    const handleLogin = async (loginData: ILoginData) => {
         try {
            const {data} = await api.get(`users?email${loginData.email}&password=${loginData.password}`)
            if(data.length === 1) {
                setUser(data[0])
                navigate("../feed"); 
            } else {
                alert("E-mail ou senha inválidos.");
            }
        } catch (error) {
            alert("Houve um erro, tente novamente.");
        }
    };

    const handleSignOut = () => {
        setUser({} as IUser);
    };

    return (
    <AuthContext.Provider value={{user, handleLogin, handleSignOut}}>
        {children}
    </AuthContext.Provider>
    )
}