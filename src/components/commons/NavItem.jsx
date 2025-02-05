import { Link } from "react-router-dom";

export default function NavItem({to, children}) {
  return (
    <Link
      to={to}
      className="cursor-pointer border-b-2 border-transparent transition-all hover:border-blue-500"
    >
      {children}
    </Link>
  );
}
