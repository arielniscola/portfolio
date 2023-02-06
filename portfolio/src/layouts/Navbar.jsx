import React from "react";

const Navbar = () => {
  return (
    <nav className="p-3 border-gray-200 rounded bg-slate-800 dark:bg-cyan-800 dark:border-cyan-700">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
          <ul className="flex flex-col mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-16 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            <li>
              <a
                href="/"
                className="block py-2 pl-3 pr-4 text-white text-lg bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent"
                aria-current="page"
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="/"
                className="block py-2 pl-3 pr-4 text-gray-700 text-lg rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Sobre mi
              </a>
            </li>
            <li>
              <a
                href="/"
                className="block py-2 pl-3 pr-4 text-gray-700 text-lg rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="/"
                className="block py-2 pl-3 pr-4 text-gray-700 text-lg rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Proyectos
              </a>
            </li>
            <li>
              <a
                href="/"
                className="block py-2 pl-3 pr-4 text-gray-700 text-lg rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
