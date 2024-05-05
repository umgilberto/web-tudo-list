export interface IRoute {
  path?: string;
  element: JSX.Element
  subRoutes?: IRoute[];
}