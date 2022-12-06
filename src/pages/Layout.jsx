import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-gray-900 font-bold text-5xl">iHawk</h1>
      <nav className="">
        <ul className="flex p-6">
          <li className="mr-6">
            <Link to="/" className="text-blue-500 hover:text-blue-800">Inspections</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  )
};

export default Layout;