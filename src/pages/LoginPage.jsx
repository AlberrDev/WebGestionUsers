import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { LoginForm } from "./LoginForm";

export const LoginPage = () => {

  const { usuario, setUsuario } = useContext(UserContext);

  const [noEsValido, setNoEsValido] = useState(false);

  const [usuarioIntro, setUsuarioIntro] = useState({
    nombre: "",
    password: "",
  });

  let navigate = useNavigate()

  const onInputChange = (e) => {

    const { name, value } = e.target

    setUsuarioIntro({
      ...usuarioIntro,
      [name]: value
    })
  }
  console.log(usuarioIntro)

  const onSubmit = (e) => {
    e.preventDefault();
    if ((usuario.nombre === usuarioIntro.nombre || usuario.email === usuarioIntro.nombre) && usuario.password ===
      usuarioIntro.password) {

        
      navigate("/home/home");
    } else {
      setNoEsValido(true);
      setTimeout(() => {
        setNoEsValido(false);

      }, 3000);
    }

  }

  return (
    <div>
      <LoginForm onInputChange={onInputChange} onSubmit={onSubmit} />
      {
        noEsValido ? (
          <h4>Los credenciales no son correctos</h4>

        ) : (
          ""
        )
      }
    </div>
  )
}
