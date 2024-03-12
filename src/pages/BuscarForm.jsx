
export const BuscarForm = ({ onInputChange, onSubmit }) => {
  return (
    <>
        <form onSubmit={onSubmit}>
            <label htmlFor="">Numero Cliente</label>
            <input type="text" name="numeroCliente" onChange={onInputChange}/>
            <input type="submit" value="buscar" />
        </form>
      
    </>
  )
}

