import Chatbot from "@/components/chatbot";
import Hero from "@/components/hero";
import Reasons from "@/components/reasons";
import Services from "@/components/services";

const LandingPage = () => {
  return (
    <main className="w-full grid">
      <Hero />
      <Services />
      <Reasons />
      <Chatbot  />
    </main>
  );
};

export default LandingPage;
