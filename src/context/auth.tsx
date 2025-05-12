import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IAuthContext, IAuthContextProviderProps, ILoginData } from './types';
import { IUser } from '../types/user';

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthContextProvider =  ({children}: IAuthContextProviderProps) => {

    const [user, setUser] = useState<IUser>({} as IUser);
    const navigate = useNavigate();

    const handleLogin = async (loginData: ILoginData) => {
         try {
            const {data} = await api.get(`users?email${loginData.email}&password=${loginData.password}`)
            if(data.length === 1) {
                navigate("../feed"); 
            } else {
                alert("E-mail ou senha inválidos.");
            }
        } catch (error) {
            alert("Houve um erro, tente novamente.");
        }
    }

    return (
    <AuthContext.Provider value={{user, handleLogin}}>
        {children}
    </AuthContext.Provider>
    )
}