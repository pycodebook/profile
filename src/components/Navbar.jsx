export default function Navbar() {
  return (
    <nav className="bg-gray-100 p-4">
      <ul className="flex items-center justify-center gap-x-14 text-sm font-medium">
        <li className="cursor-pointer border-b-2 border-transparent transition-all hover:border-blue-500">
          Profile
        </li>
        <li className="cursor-pointer border-b-2 border-transparent transition-all hover:border-blue-500">
          Blogs
        </li>
        <li className="cursor-pointer border-b-2 border-transparent transition-all hover:border-blue-500">
          Research & Projects
        </li>
      </ul>
    </nav>
  );
}