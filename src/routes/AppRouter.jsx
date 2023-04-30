import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Details from "../pages/Details";

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<Details />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
