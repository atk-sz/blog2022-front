import { Route, Routes } from "react-router-dom";
import { Suspense, useEffect } from "react";
import { lazily } from "react-lazily";
import "./App.css";
import { wakeUpCall } from "./api/api";

const { Home, About, MyWork, ContactMe, Feedback } = lazily(() =>
  import("./views")
);

// document.body.style = "background: #ededed;";
const handleBodyClick = () => {
  const sideNav = document.querySelector(".sidenav");
  if (sideNav) {
    sideNav.style.width = "0px";
  }
};
document.body.addEventListener("click", handleBodyClick);

const App = () => {
  // useEffect(() => {
  //   wakeUpCall()
  // });

  return (
    <Suspense
      fallback={<div className="col text-center p-5 h1">Loading..</div>}
    >
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
