import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Social from "./components/Social";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="app">

      <Navbar />

      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="gallery">
          <Gallery />
        </section>

        <section id="social">
          <Social />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />

    </div>
  );
}

export default App;