import { useContext } from "react"
import { UserContext } from "../context/UserContext"

export const ListarPage = () => {

  const { clientes } = useContext(UserContext);
  return (
    <>
    <h1>Listado Clientes</h1>
      {
        clientes ? (
          clientes.map(ele => (
            <div>
              <p>NumeroCliente:{ele.numeroCliente}</p>
              <p>Nombre:{ele.nombre}</p>
              <p>Apellido:{ele.apellido}</p>
              <p>Direccion:{ele.direccion}</p>
              <p>Email:{ele.email}</p>
              <p>Sexo:{ele.sexo}</p>
            </div>

          ))
        ) : (
          ""
        )
      }
    </>
  )
}

