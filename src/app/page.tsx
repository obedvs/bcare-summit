import Hero from "@/components/hero";
import Pricing from "@/components/pricing";
import Roadmap from "@/components/roadmap";
import Services from "@/components/services";
import Testimonial from "@/components/testimonial";

const LandingPage = () => {
  return (
    <main className="w-full grid">
      <Hero />
      <Services />
      <Testimonial />
      <Pricing />
      <Roadmap />
    </main>
  );
};

export default LandingPage;
