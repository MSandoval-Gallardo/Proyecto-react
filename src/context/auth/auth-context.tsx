import { createContext } from "react";
import type { User } from "../../interfaces/user.interface";

interface AuthContextType {
    user: User | null;
    login:  () => void;
    logout: () => void
}

//1. crear el contexto de autenticación
export const AuthContext = createContext<AuthContextType | undefined>(undefined);
