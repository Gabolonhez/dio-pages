import React from "react";

export interface IAuthContext {
    user: {};
    handleLogin: (loginData: ILoginData) => Promise<void>;
    handleSignOut: () => void;
}

export interface IAuthContextProviderProps {
    children: React.ReactNode;
}

export interface ILoginData { 
    email: string;
    password: string;
}