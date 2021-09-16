import { Dashboard, Login } from "../pages";

export const PATH_LOGIN = "/login";
export const PATH_DASHBOARD = "/dashboard";

export const routes = [
  { path: PATH_LOGIN, component: Login },
  { path: PATH_DASHBOARD, component: Dashboard },
];
