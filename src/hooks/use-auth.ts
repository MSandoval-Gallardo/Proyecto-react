import { useContext } from "react";
import { AuthContext } from "../context/auth/auth-context";

//3. exportar el hook para usar el contexto
export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context){
        throw new Error("useAuth debe usarse dentro de un proveedor de autenticación ")
    }
    return context;
}