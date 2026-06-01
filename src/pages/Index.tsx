import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Promo from "@/components/Promo";
import MapSection from "@/components/MapSection";
import StaysSection from "@/components/StaysSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Featured />
      <Promo />
      <MapSection />
      <StaysSection />
      <Footer />
    </main>
  );
};

export default Index;