import Image from "next/image";

const Services = () => {
  return (
    <section className=" pt-16">
        <h1 className="text-6xl font-semibold tracking-tight sm:text-5xl text-center">Nuestros Servicios</h1>
      <div className="relative flex items-center gap-24 w-[75%] mx-auto py-10">
        <article className="relative w-full md:w-[45%]">
          <div className=" w-64 h-64 absolute bottom-0 left-1/2 transform -translate-x-1/2"></div>
          <div className="relative z-10 flex justify-center">
            <img src="/services.png" alt="Doctors" className="h-[35rem] object-contain" />
          </div>
          
          <button className="z-50 text-lg absolute top-96 left-32 bg-white text-black font-semibold rounded-full py-2 pl-2 pr-6 space-x-2 flex items-center  shadow-lg transform -translate-x-1/2">
            <img src="/pacient.png" className="w-12"></img>
            <span>Laboratorios</span>
          </button>
          
          <button className="z-50 text-lg absolute top-60 right-[-3rem] bg-white text-black font-semibold rounded-full py-2 pl-2 pr-6 space-x-2 flex items-center  shadow-lg transform -translate-x-1/2">
            <img src="/pacient.png" className="w-12"></img>
            <span>Clinicas</span>
          </button>
          
          <button className="z-50 text-lg absolute bottom-6 right-[-1rem] bg-white text-black font-semibold rounded-full py-2 pl-2 pr-6 space-x-2 flex items-center  shadow-lg transform -translate-x-1/2">
            <img src="/pacient.png" className="w-12"></img>
            <span>Pacientes</span>
          </button>
        </article>
        <article className="space-y-8 w-[40%] mt-24">
          <h2 className="text-2xl tracking-tight sm:text-4xl">
            Aplicación para Pacientes
          </h2>
          <p className="text-xs font-light leading-7"> dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veni</p>
          <button className="bg-[#562CB4] py-2 px-6 rounded-3xl font-medium text-white">
            Conoce más
          </button>
        </article>
      </div>
    </section>
  );
};

export default Services;
