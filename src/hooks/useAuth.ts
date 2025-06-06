import { AuthContext } from "../context/auth";
import { useContext } from "react";

export const useAuth = () => {
    const context = useContext(AuthContext);
    
    if (!context) {
        throw Error("Não existe um contexto de autenticação");
    }
    
    return context;
    
}