import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Pillars from "./components/Pillars";
import Offices from "./components/Offices";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Pillars />
        <Offices />
      </main>
    </>
  );
}
