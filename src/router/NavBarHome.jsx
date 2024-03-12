import { NavLink } from "react-router-dom"

export const NavBarHome = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">

      <div className="navbar-collapse">
        <div className="navbar-nav">

          <NavLink
            className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
            to="/home/home"
          >
            Home
          </NavLink>

          <NavLink
            className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
            to="/home/agregar"
          >
            Agregar
          </NavLink>
          <NavLink
            className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
            to="/home/buscar"
          >
            Buscar
          </NavLink>
          <NavLink
            className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
            to="/home/listar"
          >
            Listar
          </NavLink>


        </div>
      </div>
    </nav>
  )
}

