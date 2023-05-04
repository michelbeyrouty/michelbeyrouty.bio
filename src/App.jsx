import { createRoot } from "react-dom/client";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import SearchParams from "./components/SearchParams";
import Details from "./components/Details";

const App = () => {

  return (
    <BrowserRouter>
          <header>
            <Link to="/">Michel Beyrouty</Link>
          </header>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
