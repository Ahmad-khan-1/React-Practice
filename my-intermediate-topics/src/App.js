import "./App.css";
import {
  ControlledComp,
  UncontrolledComp,
} from "./components/Controlled-and-uncontrolled-comp/page";
import FetchingData from "./components/Fetching-Data/FetchingData";
import FootballerSearch from "./components/FootballerSearch";
import AxiosFetchingData from "./components/Fetching-Data/AxiosFetching.js";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import UseMemo from "./components/useMemo/UseMemo.js";
import ReactMemo from "./components/ReactMemo.js";
const App = () => {
  return (
    <>
      <BrowserRouter className="p-[20px] bg-gray-100 min-h-screen">
        <nav style={{ marginBottom: 20 }}>
          <Link to="/">Home</Link> | <Link to="/fetching-data">Fetch Data</Link>{" "}
          | <Link to="/axios-fetching-data">Axios Fetch Data</Link>|
          <Link to="/react-memo">React Memo</Link>{" "}
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <FootballerSearch />
                <ControlledComp />
                <UncontrolledComp />
                <UseMemo />
              </>
            }
          />
          <Route path="/fetching-data" element={<FetchingData />} />
          <Route path="/axios-fetching-data" element={<AxiosFetchingData />} />
          <Route path="/react-memo" element={<ReactMemo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
