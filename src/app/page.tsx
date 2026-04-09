import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import DivisionCards from "./components/DivisionCards";
import Pillars from "./components/Pillars";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <DivisionCards />
        <Pillars />
      </main>
      <Footer />
    </>
  );
}
