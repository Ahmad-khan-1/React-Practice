import "./App.css";
import {
  ControlledComp,
  UncontrolledComp,
} from "./components/Controlled-and-uncontrolled-comp/page";
import FetchingData from "./components/Fetching-Data/FetchingData";
import FootballerSearch from "./components/FootballerSearch";
import AxiosFetchingData from "./components/Fetching-Data/AxiosFetching.js";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <nav style={{ marginBottom: 20 }}>
        <Link to="/">Home</Link> | <Link to="/fetching-data">Fetch Data</Link> |{" "}
        <Link to="/axios-fetching-data">Axios Fetch Data</Link>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <FootballerSearch />
              <ControlledComp />
              <UncontrolledComp />
            </>
          }
        />
        <Route path="/fetching-data" element={<FetchingData />} />
        <Route path="/axios-fetching-data" element={<AxiosFetchingData />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
