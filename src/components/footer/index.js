import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className=" px-10 py-2   bg-slate-900  shadow md:flex md:items-center md:justify-between md:py-4 md:px-20 z-0 w-full overflow-hidden ">
        <span className="text-sm text-gray-200 sm:text-center ">
          © 2022{" "}
          <Link to="/" className="hover:underline">
            Riot Games
          </Link>
          . Todos los derechos reservados.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-200 sm:mt-0">
          <li>
            <Link to="/" className="mr-4 hover:underline md:mr-6">
              Política de privacidad
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:underline">
              Contacto
            </Link>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
