import { NavLink } from "react-router-dom";

export default function NavItem({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `cursor-pointer border-b-2 transition-all py-0.5 ${isActive ? "border-blue-500" : "border-transparent hover:border-blue-500"}`
      }
    >
      {children}
    </NavLink>
  );
}
