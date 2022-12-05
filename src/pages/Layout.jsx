import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <h1>iHawk</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Wind Farms</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;