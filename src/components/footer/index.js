import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="px-10 py-2  bg-slate-900  shadow md:flex md:items-center md:justify-between md:py-4 md:px-20 z-0 w-screen">
        <span className="text-sm text-gray-200 sm:text-center ">
          © 2022{" "}
          <a href="/" className="hover:underline">
            Riot Games
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-200 sm:mt-0">
          <li>
            <a href="/" className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </a>
          </li>

          <li>
            <a href="/" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
