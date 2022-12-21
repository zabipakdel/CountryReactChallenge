import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import { Countries } from "./pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Countries />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
