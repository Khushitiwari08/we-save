import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


import Home from "./pages/Home";
import Login from "./pages/Login";
import JoinUs from "./pages/JoinUS";
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />}/>
        </Routes>
        <Routes>
          <Route exact path="/login" element={<Login />}/>
        </Routes>
        <Routes>
          <Route exact path="/joinus" element={<JoinUs />}/>
        </Routes>
      </div>

    </Router>
  );
}


export default App;
