import { useReducer, useState } from "react";
import { UserContext } from "./UserContext"
import { useEffect } from "react";
import { todoReducer } from "../data/todoReducer";
import { useNavigate } from "react-router-dom";


let inicialUser = JSON.parse(sessionStorage.getItem("usuarios")) || [];
let inicialCliente = JSON.parse(localStorage.getItem("clientes")) || [];






export const UserProvider = ({ children }) => {

  let navigate = useNavigate();


  const [usuario, setUsuario] = useState(inicialUser);

  const [clientes, setClientes] = useState(inicialCliente);

  if (clientes === null) {
    setClientes([])
  }

  const init = () => {
    return JSON.parse(localStorage.getItem("clientes")) || [];

  }

  const [todos, dispatch] = useReducer(todoReducer, [], init)

  const eliminar = (id) => {

    const action = {
      type: "eliminar",
      payload: id
    }
    dispatch(action);
    navigate("/home/listar");

  }
  const editar = (posicion, cliente) => {

    const action = {
      type: "editar",
      payload: { posicion, cliente }
    }
    dispatch(action);
  }


  useEffect(() => {

    sessionStorage.setItem("usuarios", JSON.stringify(usuario));

  }, [usuario]);

  useEffect(() => {

    localStorage.setItem("clientes", JSON.stringify(clientes));

  }, [clientes]);

  useEffect(() => {

    localStorage.setItem("clientes", JSON.stringify(todos));
    setClientes(JSON.parse(localStorage.getItem("clientes")));
  }, [todos]);

  return (
    <UserContext.Provider value={{ usuario, setUsuario, clientes, setClientes, eliminar, editar }}>
      {children}
    </UserContext.Provider>
  )
}
