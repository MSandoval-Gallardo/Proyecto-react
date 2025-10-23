import { useState, type ReactNode } from "react";
import { AuthContext } from "./auth-context";
import type { User } from "../../interfaces/user.interface";

interface Props {
    children?: ReactNode;
}

//2. crear el proveedor de autenticación
const AuthProvider = ({children}: Props ) => {
    const [user, setUser] = useState<User | null>(null);

    const login = () => {

        setUser({
            name: "nom-usuario",
            email: "test@correo.cl"

        })
    }

    const logout = () => {
        setUser(null);
    }

  return (
    <AuthContext.Provider value={{user, login, logout}}>{children}</AuthContext.Provider>
  )
}
export default AuthProvider;


