import "./App.css";
import Header from "./Header/Header.jsx";
import Hero from "./Hero/Hero.jsx";
import About from "./About/About.jsx";
import Stack from "./Stack/Stack.jsx";
import Projects from "./Projects/Projects.jsx";
import Education from "./Education/Education.jsx";
import Contact from "./Contact/Contact.jsx";
import Footer from "./Footer/Footer.jsx";

function App() {
  return (
    <div className="App">
      <Header />

      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Stack />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="education">
        <Education />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}

export default App;
