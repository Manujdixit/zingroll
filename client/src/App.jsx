import "./App.css";
import Title from "./components/Title";
import Home from "./pages/Home";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/title/:id" element={<Title />} />
      </Routes>
    </Router>
  );
}

export default App;
