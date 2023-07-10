import "./App.css";
import Header from "./components/Header/Header";
import AboutUs from "./components/AboutUs/AboutUs";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";
import WorkProcess from "./components/WorkProcess/WorkProcess";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <div id="home" className="holder">
      <Header />
      <Skills />
      <AboutUs />
      <Work />
      <WorkProcess />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
