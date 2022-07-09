import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { lazily } from "react-lazily";
import "./App.css";

const { Home, About, MyWork, ContactMe, Feedback } = lazily(() =>
  import("./views")
);

const App = () => {
  return (
    <Suspense fallback={<div className="col text-center p-5 h1">Zloading</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/my-work" element={<MyWork />} />
        <Route path="/contact-me" element={<ContactMe />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </Suspense>
  );
};

export default App;
