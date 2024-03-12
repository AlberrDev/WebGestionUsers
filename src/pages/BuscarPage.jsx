import { useContext, useState } from "react"
import { BuscarForm } from "./BuscarForm"
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";

export const BuscarPage = () => {

  const [numeroBuscar, setNumeroBuscar] = useState();

  const [clienteEncontrado, setClienteEncontrado] = useState();

  const { clientes, setClientes, eliminar } = useContext(UserContext);

  const onInputChange = (e) => {

    setNumeroBuscar(e.target.value)
  }
  console.log(numeroBuscar)

  const onSubmit = (e) => {
    e.preventDefault();
    const resultado = clientes.find((ele) => ele.numeroCliente === numeroBuscar);
    console.log(resultado)
    setClienteEncontrado(resultado)


  }

  return (
    <div>
      <BuscarForm onInputChange={onInputChange} onSubmit={onSubmit} />
      <p>{JSON.stringify(clienteEncontrado)}</p>
      {
        clienteEncontrado ? (
          <div>

            <button onClick={() => eliminar(clienteEncontrado.numeroCliente)}>eliminar</button>
            <Link to={`/home/editar/${clienteEncontrado.numeroCliente}`}>Editar</Link>

          </div>


        ) :
          ("")
      }
    </div>
  )
}

