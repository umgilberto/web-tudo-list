import { BrowserRouter, Routes, Route } from "react-router-dom";
import { generateRoute } from "../utils/generateRoute";
import { routeList } from "./routeList";
import { NotFoundPage } from "../template/shared/NotFoundPage";
import LoginPage from "../template/LoginPage";

const RouteToRender = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routeList.map(generateRoute)}
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteToRender;
