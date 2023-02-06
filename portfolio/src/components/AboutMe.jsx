import React from "react";
import profilePicture from "../assets/fotoPerfil.jpeg";
const AboutMe = () => {
  return (
    <div className="flex flex-row flex justify-between">
      <div className="basis-1/4 ml-20">
        <img
          className="w-36 h-40 border-2 border-gray-800 rounded-3xl dark:border-cyan-900 backdrop-grayscale-50 shadow-xl"
          src={profilePicture}
          alt="Foto perfil"
        />
      </div>
      <div className="basis-1/4 ml-20">
        <p>
          Apasionado de la tecnología desde niño, lo cual me llevo a estudiar y
          recibir el diploma de Ingeniero en Sistemas de Información. Dentro del
          camino descubrí que mi interés esta en la resolución de problemas y
          como implementarlo en el diseño y desarrollo de sistemas que brinden
          valor a los usuarios. Tengo experiencia trabajando en el área de
          sistemas durante 6 años, realizando trabajos de desarrollo,
          configuraciones de red y de servidores. Soy una persona tranquila, me
          gusta trabajar en equipo y a su vez disfruto ser autodidacta. Amante
          de los deportes, cine y videojuegos.
        </p>
      </div>
      <div className="basis-1/4 ml-20">
        <button
          type="button"
          class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
        >
          Linkdin
        </button>
        <button
          type="button"
          class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
        >
          Descargar CV
        </button>
      </div>
    </div>
  );
};

export default AboutMe;
