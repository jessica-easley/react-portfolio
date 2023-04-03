import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
