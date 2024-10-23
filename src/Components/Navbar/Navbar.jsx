import { NavLink } from "react-router-dom";

export default function Navbar() {
  const activeStyle = "underline underline-offset-3";

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink
            to="/">
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/todo"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Todo
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/menaje"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Menaje
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electrodomesticos"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Electrodomesticos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/otros"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Otros
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li>
          <NavLink
            to="/my-orders"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/my-account"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sing-in"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Sing In
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            🛒 <span>0</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
