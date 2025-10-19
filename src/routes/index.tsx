import { createRouter } from "@tanstack/react-router";
import { rootRoute } from "./root.route";
import { homeRoute } from "./home.route";
import { notFoundRoute } from "./notFound.route";
import { NotFoundPage } from "../pages/notFoundPage";

const routeTree = rootRoute.addChildren([
  homeRoute,
  notFoundRoute,
]);

export const router = createRouter({
  routeTree,
  defaultNotFoundComponent: () => <NotFoundPage />,
});
