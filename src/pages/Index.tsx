import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Listen from "@/components/Listen";
import Formats from "@/components/Formats";
import Contact from "@/components/Contact";
import SideB from "@/components/SideB";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Listen />
      <Formats />
      <Contact />
      <SideB />
      <Footer />
    </div>
  );
};

export default Index;
