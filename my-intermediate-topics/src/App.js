import "./App.css";
import {
  ControlledComp,
  UncontrolledComp,
} from "./components/Controlled-and-uncontrolled-comp/page";
import FootballerSearch from "./components/FootballerSearch";

function App() {
  return (
    <>
      <FootballerSearch />
      <ControlledComp />
      <UncontrolledComp />
    </>
  );
}

export default App;
