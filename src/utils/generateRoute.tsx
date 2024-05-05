import { Route } from "react-router-dom";
import { IRoute } from "../types/routes";

export const generateRoute = (route: IRoute) => {
  const { element, path, subRoutes } = route;
  return (
    <Route path={path} element={element}>
      {subRoutes?.map(generateRoute)}
    </Route>
  );
};
