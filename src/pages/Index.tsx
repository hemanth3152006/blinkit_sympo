import { Navbar, Footer } from "@/components/NavFooter";
import HeroSection from "@/components/HeroSection";
import EventsSection from "@/components/EventsSection";
import ScheduleSection from "@/components/ScheduleSection";
import AboutSection from "@/components/AboutSection";
import RegisterSection from "@/components/RegisterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <EventsSection />
      <ScheduleSection />
      <AboutSection />
      <RegisterSection />
      <Footer />
    </div>
  );
};

export default Index;
