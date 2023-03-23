import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container-navbar">
      <Link to="/" style={{ color: "black" }}>
        <h1>Comidas</h1>
      </Link>

      <ul className="container-list">
        <Link to="/">Inicio</Link>
        <Link to="/category/asiatica">Comida Asiatica</Link>
        <Link to="/category/peruana">Comida Peruana</Link>
        <Link to="/category/venezolana">Comida Venezolana</Link>
      </ul>
      <CartWidget />
    </div>
  );
};

export default Navbar;
