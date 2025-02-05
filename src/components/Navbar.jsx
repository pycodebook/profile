import NavItem from "./commons/NavItem";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-center gap-x-14 bg-gray-100 py-4 text-sm font-medium">
      <NavItem to="/blogs">Blogs</NavItem>
      <NavItem to="/research-project"> Research & Projects</NavItem>
      <NavItem to="/profile">Author</NavItem>
    </nav>
  );
}
