import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { lazily } from "react-lazily";
import "./App.css";

const { Home, About, MyWork, ContactMe, Feedback, Thanks } = lazily(() =>
  import("./views")
);

const App = () => {
  return (
    <Suspense fallback={<div className="col text-center p-5 h1">Loading..</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/my-work" element={<MyWork />} />
        <Route path="/contact-me" element={<ContactMe />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/payment-success" element={<Thanks />} />
      </Routes>
    </Suspense>
  );
};

export default App;
