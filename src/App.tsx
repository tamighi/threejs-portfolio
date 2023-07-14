import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Hero, Navbar, StarCanvas } from "./components";

import "./index.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar /> <Hero />
        </div>
        <About />
        <Experience />
      </div>
      <div className="relative z-0">
        <Contact />
        <StarCanvas />
      </div>
    </BrowserRouter>
  );
};

export default App;
