import Hero from "@/components/hero";
import Reasons from "@/components/reasons";
import Services from "@/components/services";

const LandingPage = () => {
  return (
    <main className="w-full grid">
      <Hero />
      <Services />
      <Reasons />
    </main>
  );
};

export default LandingPage;
