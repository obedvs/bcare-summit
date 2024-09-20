import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute size-[810px] -right-[118px] -top-[118px] bg-gradient-to-bl from-[#6DFFD6] to-[#34A5AB] rounded-full overflow-clip" >
        <Image src="/hero.png" width={810} height={810} alt="B-Care" className="size-full -ml-12" />
      </div>
      <div className="container mx-auto">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pt-48 pb-36 md:pt-80 md:pb-48">
            <div className="text-start mb-6">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl drop-shadow drop-shadow-w">
                ¡Bienvenido/a a B-Care!
              </h1>
              <p className="mt-4 max-w-md text-lg sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                B-Care es un proyecto creado en el hackathon Summit 2024
              </p>
            </div>
            <button className="bg-[#34A5AB] py-2 px-4 rounded-3xl font-medium text-white text-xl">
              Conoce más
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
