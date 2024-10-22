import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/shop">Shop</NavLink>
        </li>
        <li>
          <NavLink to="/todo">Todo</NavLink>
        </li>
        <li>
          <NavLink to="/menaje">Menaje</NavLink>
        </li>
        <li>
          <NavLink to="/electrodomesticos">Electrodomesticos</NavLink>
        </li>
        <li>
          <NavLink to="/otros">Otros</NavLink>
        </li>
      </ul>
    </nav>
  );
};
