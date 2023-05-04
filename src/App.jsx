import { createRoot } from "react-dom/client";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";

const App = () => {

  return (
    <BrowserRouter>
          <header>
            <Link to="/">Michel Beyrouty</Link>
          </header>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
