// components/Services.tsx
"use client"; // Si estás usando la nueva App Router de Next.js

import { useState } from 'react';

// Definimos la interfaz para los tipos de información
interface Info {
  title: string;
  description: string;
}

const Services = () => {
  // Estado inicial y opciones de contenido tipado con la interfaz Info
  const [info, setInfo] = useState<Info>({
    title: "Aplicación para Pacientes",
    description:
      "Dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veni.",
  });

  // Opciones de contenido para cada botón
  const infoOptions: Record<string, Info> = {
    laboratorios: {
      title: "Laboratorios",
      description:
        "Información sobre los laboratorios, sus servicios y cómo contribuyen a la salud del paciente.",
    },
    clinicas: {
      title: "Clínicas",
      description:
        "Descubre nuestras clínicas y sus servicios de salud que brindan atención de calidad.",
    },
    pacientes: {
      title: "Pacientes",
      description:
        "Información dedicada a los pacientes, sus cuidados y servicios personalizados.",
    },
  };

  // Función para manejar el cambio de contenido
  const handleChangeInfo = (type: keyof typeof infoOptions) => {
    setInfo(infoOptions[type]);
  };

  return (
    <section className="pt-12">
      <h1 className="text-6xl font-semibold tracking-tight sm:text-5xl text-center">
        Nuestros Servicios
      </h1>
      <div className="relative flex items-center gap-24 w-[75%] mx-auto py-10">
        <article className="relative w-full md:w-[45%]">
          <div className="w-64 h-64 absolute bottom-0 left-1/2 transform -translate-x-1/2"></div>
          <div className="relative z-10 flex justify-center">
            <img
              src="/services.png"
              alt="Doctors"
              className="h-[35rem] object-contain"
            />
          </div>

          {/* Botón Laboratorios */}
          <button
            onClick={() => handleChangeInfo("laboratorios")}
            className="z-50 text-lg absolute top-96 left-32 bg-white text-black font-semibold rounded-full py-2 pl-2 pr-6 space-x-2 flex items-center shadow-lg transform -translate-x-1/2"
          >
            <img src="/pacient.png" className="w-12" alt="Laboratorios" />
            <span>Laboratorios</span>
          </button>

          {/* Botón Clínicas */}
          <button
            onClick={() => handleChangeInfo("clinicas")}
            className="z-50 text-lg absolute top-60 right-[-3rem] bg-white text-black font-semibold rounded-full py-2 pl-2 pr-6 space-x-2 flex items-center shadow-lg transform -translate-x-1/2"
          >
            <img src="/pacient.png" className="w-12" alt="Clínicas" />
            <span>Clínicas</span>
          </button>

          {/* Botón Pacientes */}
          <button
            onClick={() => handleChangeInfo("pacientes")}
            className="z-50 text-lg absolute bottom-6 right-[-1rem] bg-white text-black font-semibold rounded-full py-2 pl-2 pr-6 space-x-2 flex items-center shadow-lg transform -translate-x-1/2"
          >
            <img src="/pacient.png" className="w-12" alt="Pacientes" />
            <span>Pacientes</span>
          </button>
        </article>

        {/* Contenido dinámico a la derecha */}
        <article className="space-y-8 w-[40%] mt-24">
          <h2 className="text-2xl tracking-tight sm:text-4xl">{info.title}</h2>
          <p className="text-xs font-light leading-7">{info.description}</p>
          <button className="bg-[#562CB4] py-2 px-6 rounded-3xl font-medium text-white">
            Conoce más
          </button>
        </article>
      </div>
    </section>
  );
};

export default Services;
