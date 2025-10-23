// import Card from "./components/card";

import LoginButton from "./components/login-button";
import LogoutButton from "./components/logout-button";
import { useAuth } from "./hooks/use-auth";

const App = () => {

  // const {user} = useAuth()
  const {user} = useAuth();

  if(!user){
    return(
    <div className="container">
      <h1>tienes que logearte</h1>
      <LoginButton/>
    </div>
    )
  }

  return (

    <div className="container">
      <h1>Bienvenido, {user.name}
        <p>Correo usuario: {user.email}</p>
        <LogoutButton/>
      </h1>
    </div>
    // <div className="container">
    //   <h1>CARD</h1>
    //   <Card>
    //     <h2 className="card-title"> Todos los componentes del card </h2>
    //     <p className="card-text">contenido</p>
    //     <button className="btn btn-primary">boton</button>
    //   </Card>
    //   <Card>
    //     <h2 className="card-title"> solo el titulo</h2>
    //   </Card>
    //   <Card>
    //     <p className="card-text">solo el contenido</p>
    //   </Card>
    //   <Card>
    //     <button className="btn btn-primary">Solo el boton</button>
    //   </Card>
    // </div>
  )
}
export default App