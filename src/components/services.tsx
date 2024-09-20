// components/Services.tsx
"use client"; // Si estás usando la nueva App Router de Next.js

import Image from 'next/image';
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
      <h2 className="text-2xl font-bold tracking-tight sm:text-4xl text-center">
        Nuestros Servicios
      </h2>
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 container mx-auto py-10 px-2">
        <article className="relative w-full flex flex-col md:block items-center gap-4">
          {/* <div className="w-64 h-64 absolute bottom-0 left-1/2 transform -translate-x-1/2"></div> */}
          <div className="z-10 md:flex justify-center hidden">
            <Image
              src="/services.png"
              alt="Doctors"
              className="h-[28rem] object-contain max-w-[320px]"
              width={500}
              height={500}
            />
          </div>

          {/* Botón Laboratorios */}
          <button
            onClick={() => handleChangeInfo("laboratorios")}
            className="min-w-[187.67px] z-50 text-lg md:absolute top-44 left-32 bg-white text-black font-semibold rounded-full py-2 px-2 gap-x-2 flex items-center justify-center shadow-lg md:-translate-x-1/2"
          >
            <Image src="/pacient.png" className="w-12" alt="Laboratorios" width={52} height={52} />
            <span>Laboratorios</span>
          </button>

          {/* Botón Clínicas */}
          <button
            onClick={() => handleChangeInfo("clinicas")}
            className="min-w-[187.67px] z-50 text-lg md:absolute top-24 right-0 bg-white text-black font-semibold rounded-full py-2 px-2 gap-x-2 flex items-center justify-start shadow-lg md:-translate-x-1/2"
          >
            <Image src="/pacient.png" className="w-12" alt="Clínicas" width={52} height={52} />
            <span>Clínicas</span>
          </button>

          {/* Botón Pacientes */}
          <button
            onClick={() => handleChangeInfo("pacientes")}
            className="min-w-[187.67px] z-50 text-lg md:absolute bottom-24 right-4 bg-white text-black font-semibold rounded-full py-2 px-2 gap-x-2 flex items-center justify-start shadow-lg md:-translate-x-1/2"
          >
            <Image src="/pacient.png" className="w-12" alt="Pacientes" width={52} height={52} />
            <span>Pacientes</span>
          </button>
        </article>

        {/* Contenido dinámico a la derecha */}
        <article className="space-y-8 w-full">
          <h2 className="text-2xl tracking-tight sm:text-4xl">{info.title}</h2>
          <p className="text-lg font-light leading-7">{info.description}</p>
          <button className="bg-[#562CB4] py-2 px-6 rounded-3xl font-medium text-white">
            Conoce más
          </button>
        </article>
      </div>
    </section>
  );
};

export default Services;
