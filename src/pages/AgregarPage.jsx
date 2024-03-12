import { useNavigate } from "react-router-dom"
import { AgregarForm } from "./AgregarForm"
import { useContext, useState } from "react"
import { UserContext } from "../context/UserContext"

export const AgregarPage = () => {

  let navigate = useNavigate();

  const { clientes, setClientes } = useContext(UserContext);
  const [hayDatos, setHayDatos] = useState(true);

  const [clienteNuevo, setClienteNuevo] = useState({
    numeroCliente: "",
    nombre: "",
    apellido: "",
    direccion: "",
    email: "",
    sexo: "",


  });

  const onInputChange = (e) => {

    const { name, value } = e.target

    setClienteNuevo({
      ...clienteNuevo,
      [name]: value
    })
  }
  console.log(clienteNuevo)

  const onSubmit = (e) => {
    e.preventDefault();
    if (clienteNuevo.numeroCliente != "" && clienteNuevo.nombre != "" && clienteNuevo.apellido != "" &&
      clienteNuevo.direccion != "" && clienteNuevo.email != "" && clienteNuevo.sexo != "---") {
      setClientes([...clientes, clienteNuevo]);
      navigate("/home/listar")
    } else {
      setHayDatos(false);
      setTimeout(() => {
        setHayDatos(true);

      }, 3000);
    }


  }
  return (
    <>
      <AgregarForm onInputChange={onInputChange} onSubmit={onSubmit} />
      {
        !hayDatos ? (

          <p>Tienes que rellenar todos los campos</p>
        ) : ("")
      }
    </>
  )
}

