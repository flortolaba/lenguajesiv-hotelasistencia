import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-contenido">
        <NavLink to="/" className="marca">
          Aurora<span className="marca-sub">Hotel</span>
        </NavLink>

        <nav className="nav">
          <NavLink to="/" end>
            Habitaciones
          </NavLink>
          <NavLink to="/nosotros">Nosotros</NavLink>
          <NavLink to="/contacto">Contacto</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;