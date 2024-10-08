import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute size-[700px] -right-[6rem] -top-[6rem] bg-gradient-to-bl from-[#6DFFD6] to-[#34A5AB] rounded-full overflow-clip md:block hidden" >
        <Image src="/hero.png" width={700} height={700} alt="B-Care" className="size-full -ml-12" />
      </div>
      <div className="container mx-auto">
        <div className="relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pt-48 pb-36 md:pt-80 md:pb-48">
            <div className="text-start mb-6">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl drop-shadow drop-shadow-w">
                ¡Bienvenido/a a <br /> B-Care!
              </h1>
              <p className="mt-4 max-w-md text-lg sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                B-Care es un proyecto creado en el hackathon Summit 2024
              </p>
            </div>
            <Link href="/#services" className="bg-[#34A5AB] py-2 px-4 rounded-3xl font-medium text-white text-xl">
              Conoce más
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
