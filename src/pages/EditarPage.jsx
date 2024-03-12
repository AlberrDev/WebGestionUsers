import { useContext, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { UserContext } from "../context/UserContext"

export const EditarPage = () => {
    const { id } = useParams()
    let navigate = useNavigate();
    const { clientes, setClientes,editar } = useContext(UserContext);
    let clienteEncontrado = clientes.find((ele) => ele.numeroCliente === id);
    console.log(clienteEncontrado)

    const [clienteEdit, setClienteEdit] = useState({
        numeroCliente: clienteEncontrado.numeroCliente,
        nombre: clienteEncontrado.nombre,
        apellido: clienteEncontrado.apellido,
        direccion: clienteEncontrado.direccion,
        email: clienteEncontrado.email,
        sexo: clienteEncontrado.sexo,


    });

    const onInputChange = (e) => {

        const { name, value } = e.target

        setClienteEdit({
            ...clienteEdit,
            [name]: value
        })
    }
    console.log(clienteEdit)

    const onSubmit = (e) => {
        e.preventDefault();
        let posicion = clientes.findIndex((ele) => ele.numeroCliente === id);
        editar(posicion,clienteEdit)
        navigate("/home/listar")
        

    }
    return (
        <>
            <h1>Pagina de Editar</h1>
            <form onSubmit={onSubmit}>
                <label htmlFor="NumeroCliente">NumeroCliente</label>
                <input type="Number" name="numeroCliente" onChange={onInputChange}  defaultValue={clienteEncontrado.numeroCliente}/><br />
                <label htmlFor="nombre">nombre</label>
                <input type="text" name="nombre" onChange={onInputChange}  defaultValue={clienteEncontrado.nombre}/><br />
                <label htmlFor="apellido">apellido</label>
                <input type="text" name="apellido" onChange={onInputChange}  defaultValue={clienteEncontrado.apellido}/><br />
                <label htmlFor="direccion">direccion</label>
                <input type="text" name="direccion" onChange={onInputChange}  defaultValue={clienteEncontrado.direccion}/><br />
                <label htmlFor="email">email</label>
                <input type="email" name="email" onChange={onInputChange}  defaultValue={clienteEncontrado.email}/><br />
                <label htmlFor="sexo">Choose a car:</label>
                <select name="sexo" id="sexo" form="sexoform" onChange={onInputChange} defaultValue={clienteEncontrado.sexo}>
                    <option value="---">----</option>
                    <option value="H">H</option>
                    <option value="M">M</option>

                </select>

                <br />
                <input type="submit" />
            </form>

        </>
    )
}

