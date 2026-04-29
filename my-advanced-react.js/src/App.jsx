import About from "./components/About";
import Contact from "./components/Contact";
import CostumerContact from "./components/CostumerContac";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

function App() {
  console.log(window.history);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact/:cid" element={<CostumerContact />} />
        <Route path="/customer" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
