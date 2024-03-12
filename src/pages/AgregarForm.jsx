
export const AgregarForm = ({ onInputChange, onSubmit }) => {
    return (
        <>
            <h1>Pagina de Agregar</h1>
            <form onSubmit={onSubmit}>
                <label htmlFor="NumeroCliente">NumeroCliente</label>
                <input type="Number" name="numeroCliente" onChange={onInputChange} /><br />
                <label htmlFor="nombre">nombre</label>
                <input type="text" name="nombre" onChange={onInputChange} /><br />
                <label htmlFor="apellido">apellido</label>
                <input type="text" name="apellido" onChange={onInputChange} /><br />
                <label htmlFor="direccion">direccion</label>
                <input type="text" name="direccion" onChange={onInputChange} /><br />
                <label htmlFor="email">email</label>
                <input type="email" name="email" onChange={onInputChange} /><br />
                <label htmlFor="sexo">Choose a car:</label>
                <select name="sexo" id="sexo" form="sexoform" onChange={onInputChange}>
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

