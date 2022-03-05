import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Watchlist from "./components/Watchlist";
import Add from "./components/Add";
import Watched from "./components/Watched";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Watchlist />} />

        <Route path="/add" element={<Add />} />
        <Route path="/watched" element={<Watched />} />
      </Routes>
    </Router>
  );
};

export default App;
