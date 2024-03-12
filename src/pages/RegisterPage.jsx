import { useContext, useState } from "react"
import { RegisterForm } from "./RegisterForm"
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export const RegisterPage = () => {

  const { usuario, setUsuario } = useContext(UserContext);
  const [noUser, setNoUser] = useState(false)
  const [noEmail, setNoEmail] = useState(false)
  const [noPassword, setNoPassword] = useState(false)


  let navigate = useNavigate()

  const [userRegis, setUserRegis] = useState({
    nombre: "",
    email: "",
    password: "",
  });



  const onInputChange = (e) => {

    const { name, value } = e.target

    setUserRegis({
      ...userRegis,
      [name]: value
    })
  }
  console.log(userRegis)

  const onSubmit = (e) => {
    e.preventDefault();

    if (userRegis.nombre == "") {
      setNoUser(true)
      setTimeout(() => {
        setNoUser(false)
      }, 3000);
    }
    if (userRegis.email == "") {
      setNoEmail(true)
      setTimeout(() => {
        setNoEmail(false)
      }, 3000);
    }
    if (userRegis.password == "") {
      setNoPassword(true)
      setTimeout(() => {
        setNoPassword(false)
      }, 3000);
    }
    if (userRegis.nombre != "" && userRegis.email != "" && userRegis.password != "") {
      setUsuario(userRegis)
      navigate("/login")
    }



    
  }

  return (
    <div>
      <RegisterForm onInputChange={onInputChange} onSubmit={onSubmit} />
      {
        noUser ? (
          <p>Introduce el User</p>
        ):(
          ""
        )
      }
      {
        noEmail ? (
          <p>Introduce el Email</p>
        ):(
          ""
        )
      }
      {
        noPassword ? (
          <p>Introduce el Pass</p>
        ):(
          ""
        )
      }

    </div>
  )
}

