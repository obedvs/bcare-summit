import Chatbot from "@/components/chatbot";
import Hero from "@/components/hero";
import Reasons from "@/components/reasons";
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
      <Reasons />
      <Chatbot  />
      <Roadmap />
    </main>
  );
};

export default LandingPage;
