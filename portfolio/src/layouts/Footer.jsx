import React from "react";

const Footer = () => {
  return (
    <footer class="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
      <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <a href="#" class="mr-4 hover:underline md:mr-6 ">
            GitHub
          </a>
        </li>
        <li>
          <a href="#" class="mr-4 hover:underline md:mr-6">
            Whatsapp
          </a>
        </li>
        <li>
          <a href="#" class="mr-4 hover:underline md:mr-6">
            Linkedin
          </a>
        </li>
        <li>
          <a href="#" class="hover:underline">
            gmail
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
