import { useAuth } from "../hooks/use-auth";

const LoginButton = () => {
    const {login, user} = useAuth()
  return (
    <button 
    className="btn btn-primary"
    onClick={login}
    >
     {user ? `(${user.name}) aca puedes salir` : " sin conexion"}</button>
  )
}
export default LoginButton