import { BrowserRouter } from "react-router-dom";
import { Contact, Hero, Navbar, StarCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar /> <Hero />
        </div>
      </div>
      <div className="mx-auto inline-block">Test</div>
      <div className="relative z-0">
        <Contact />
        <StarCanvas />
      </div>
    </BrowserRouter>
  );
};

export default App;
