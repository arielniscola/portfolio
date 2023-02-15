import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screnn bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form action="" className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contacto
          </p>
          <p className="text-gray-300 py-4">
            Podes contactarme por el siguiente formulario o enviarme correo a
            arielniscola@gmail.com
          </p>
        </div>
        <input
          className="bg-white p-2"
          type="text"
          name="name"
          placeholder="Name"
        />
        <input className="my-4 p-2 bg-white" type="email" placeholder="Email" />
        <textarea
          className="bg-white p-2"
          name="message"
          id=""
          rows="10"
          placeholder="Mensaje"
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 px-4 py-3 my-8 mx-auto flex items-center rounded-lg">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contact;
