
export const LoginForm = ({ onInputChange, onSubmit }) => {
  return (
    <>
       <h1>Pagina de Logeo</h1>
            <form onSubmit={onSubmit}>
                <label htmlFor="">Nombre/Email</label>
                <input type="text" name="nombre" onChange={onInputChange} />
                <label htmlFor="">Password</label>
                <input type="password" name="password" onChange={onInputChange} />
                <br />
                <input type="submit" value="registrar" />
            </form>
    </>
  )
}

