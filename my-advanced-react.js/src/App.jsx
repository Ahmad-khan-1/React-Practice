import About from "./components/About";
import Contact from "./components/Contact";
import CostumerContact from "./components/CostumerContac";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Tool from "./React-Dev-tool/Tool";
import { ReactForm } from "./components/ReactForm";
import { UseRef } from "./components/UseRef";
import CurrencyConverter from "./components/Currency-Converter/CurrencyConverter";
import ProtectedDashboard from "./components/Higher-Order-component/ProtectedDashboard";

function App() {
  console.log(window.history);
  return (
    <>
      <Navbar />
      <CurrencyConverter />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact/:cid" element={<CostumerContact />} />
        <Route path="/customer" element={<Navigate to="/" />} />
      </Routes> */}
      <ProtectedDashboard />
      <Tool />
      <ReactForm />
    </>
  );
}

export default App;
