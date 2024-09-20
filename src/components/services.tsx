import Image from "next/image";

const Services = () => {
  return (
    <section className="bg-[#90EDFF]/30">
      <div className="relative grid grid-cols-1 md:grid-cols-2 container mx-auto py-12">
        <article className="relative min-h-[560px] flex justify-center">
          <Image src="/services_1.png" width={560} height={560} alt="Servicios" className="h-full w-auto" />
        </article>
        <article className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight sm:text-4xl">
            Nuestros Servicios
          </h2>
          <h3 className="text-lg font-semibold tracking-tight sm:text-xl">Clinicas</h3>
          <p>Ofrecemos servicios de clinicas</p>
          <button className="bg-[#34A5AB] py-2 px-4 rounded-3xl font-medium text-white text-xl">
            Conoce más
          </button>
        </article>
      </div>
    </section>
  );
};

export default Services;
