import { Home } from "./views";
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
      </Routes>
    </Suspense>
  );
};

export default App;
