import { Link } from "react-router-dom";
import { useCart } from "./context/CartContext";

const NavBar = () => {
  const { cartQty, getTotal } = useCart();

  return (
    <div className="navbar bg-warning-content text-neutral-content gap-20 shadow-xl">
      <div className="navbar-start lg:hidden">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow text-white  bg-warning-content rounded-box w-52"
          >
            <li>
              <Link
                className="focus:bg-white focus:text-warning-content hover:bg-white hover:text-warning-content"
                to={"/"}
              >
                Homepage
              </Link>
            </li>
            <li>
              <Link
                className="focus:bg-white focus:text-warning-content hover:bg-white hover:text-warning-content"
                to={"/catalogo"}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                className="focus:bg-white focus:text-warning-content hover:bg-white hover:text-warning-content"
                to={"/cart"}
              >
                Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Link to={"/"} className="btn btn-ghost normal-case text-xl text-white">
        Adaptogen Store
      </Link>
      <div className="navbar-start hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/catalogo"}>Catálogo</Link>
          </li>
          <li tabIndex={0}>
            <Link>
              Sobre el Uso de Adaptogenos
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </Link>
            <ul className="p-2">
              <li>
                <Link>Submenu 1</Link>
              </li>
              <li>
                <Link>Submenu 2</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link>Contacto</Link>
          </li>
        </ul>
      </div>
      <div className="flex-none end">
        <div className="dropdown dropdown-end cart-widget">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">{cartQty()}</span>
            </div>
          </label>
          <div
            tabIndex={0}
            className="mt-3 card card-compact dropdown-content w-52 bg-warning-content shadow"
          >
            <div className="card-body bg-warning-content">
              <span className="font-bold text-lg text-white">
                {cartQty()} Items
              </span>
              <span className="text-white text-lg">Subtotal: ${getTotal()}</span>
              <div className="card-actions">
                <button className="btn btn-xs justify-end mt-3 btn-success">
                  <Link to={"/cart"}>Ir al Carrito</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
