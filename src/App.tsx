import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  StarCanvas,
  Tech,
  Works,
} from "./components";

import "./index.css";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="flex flex-col gap-16">
        <Hero />
        <About />
        <Experience />
        <Tech />
        <Works />
      </div>
      <div className="relative z-0">
        <Contact />
        <StarCanvas />
      </div>
    </BrowserRouter>
  );
};

export default App;
