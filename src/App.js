import logo from "./logo.svg";
import "./App.css";
import Login from "./Component/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CreateAccount from "./Component/CreateAccount";
import Homepage from "./Component/Homepage";
import Manuvallogin from "./Component/Manuvallogin";

function App() {
  return (
    <div className="login">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/createaccount" element={<CreateAccount />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/looksyou" element={<Manuvallogin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
