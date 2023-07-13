import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Preloader from "../src/components/Pre";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader load={load} />

      <div className="App" id={load ? "no-scroll" : "scroll"}>
        {/* <Navbar />
        <ScrollToTop /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/work" element={<Experience />} /> */}
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
