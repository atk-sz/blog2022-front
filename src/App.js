import { About, Home } from "./views";
import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import "./App.css";

const App = () => {

  return (
    <Suspense
      fallback={
        <div style={{ position: "fixed", left: "45vw", top: "45vh" }}>
          __ PM __
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/my-work" element={<About />} />
        <Route path="/social-media" element={<About />} />
        <Route path="/feedback" element={<About />} />
      </Routes>
    </Suspense>
  );
};

export default App;
