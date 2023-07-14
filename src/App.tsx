import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
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
      <div className="flex flex-col">
        <Hero />
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
      </div>
      <div className="relative z-0">
        <Contact />
        <StarCanvas />
      </div>
    </BrowserRouter>
  );
};

export default App;
