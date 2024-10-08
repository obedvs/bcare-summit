import Image from "next/image";

const Reasons = () => {
  return (
    <section className="py-4 container mx-auto px-2 md:mb-8" id="why">
      <h2 className="tracking-tight text-2xl sm:text-4xl font-semibold text-center">
        ¿Por qué <span className="font-bold">B-care</span>?
      </h2>
      <article className="max-w-3xl w-full relative mx-auto mt-8 md:mt-32 mb-8 rounded-3xl bg-gradient-to-r to-[#63b1f5] from-[#0d5b9f] p-6 md:p-12">
        <p className="w-full md:w-[70%] text-base md:text-lg text-slate-100/80 font-semibold leading-9">
          B-Care es un proyecto que busca facilitar el acceso a la salud a
          través de la tecnología. Con nuestro chatbot, puedes agendar, revisar
          y modificar tus citas médicas de manera fácil y rápida. Simplifica tu
          experiencia y mantén el control de tu salud desde cualquier lugar.
        </p>
        <Image
          src="/reasons.png"
          className="absolute -top-24 -right-10 max-w-[320px] object-contain md:block hidden"
          width={500}
          height={500}
          alt="Reasons"
        />
      </article>
    </section>
  );
};

export default Reasons;
