import { useAuth } from "../hooks/use-auth"


const LogoutButton = () => {

    const {logout} = useAuth() 
  return (
    <button className="btn btn-danger" onClick={logout}>LogoutButton</button>
  )
}
export default LogoutButton