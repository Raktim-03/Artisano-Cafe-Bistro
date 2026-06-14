import Navbar from "./components/Navbar";
import About from "./components/About"
import Hero from "./sections/Hero"
import MenuShowcase from "./components/MenuShowcase"
import Ambience from "./components/Ambience";
import ContactSection from "./components/ContactSection";

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <MenuShowcase/>
      <Ambience/>
      <ContactSection/>
    </>
  );
}

export default App;