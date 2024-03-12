import { Route, Routes } from "react-router-dom"
import { AgregarPage } from "../pages/AgregarPage"
import { BuscarPage } from "../pages/BuscarPage"
import { HomePage } from "../pages/HomePage"
import { ListarPage } from "../pages/ListarPage"
import { NavBarHome } from "../router/NavBarHome"
import { EditarPage } from "../pages/EditarPage"

export const HomeRouter = () => {
  return (
    <>
      <NavBarHome />
      <Routes>
        <Route path="/listar" element={<ListarPage />} />
        <Route path="/agregar" element={<AgregarPage />} />
        <Route path="/buscar" element={<BuscarPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/editar/:id" element={<EditarPage />} />

        <Route path="/home/*" element={<HomePage />} />




      </Routes>
    </>
  )
}

