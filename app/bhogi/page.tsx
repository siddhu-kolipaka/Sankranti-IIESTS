import Hero from "../../components/bhogi/Hero";
import AboutSection from "../../components/bhogi/About";
import EventsSection from "../../components/bhogi/Event";
import { Gallery } from "../../components/bhogi/Gallery";
import { History } from "../../components/bhogi/History";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <AboutSection />
      <EventsSection />
      <History />
      <Gallery />
    </main>
  );
}
