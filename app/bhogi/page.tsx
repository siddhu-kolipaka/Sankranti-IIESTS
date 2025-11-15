import Hero from "../../components/bhogi/Hero";
import AboutSection from "../../components/bhogi/About";
import EventsSection from "../../components/bhogi/Event";
import { Gallery } from "../../components/bhogi/Gallery";
import { History } from "../../components/bhogi/History";
import "./bhogi.css";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <div className="bg-gradient-to-b from-black to-gray-950">
        <AboutSection />
        <EventsSection />
        <History />
        <Gallery />
      </div>
    </main>
  );
}
