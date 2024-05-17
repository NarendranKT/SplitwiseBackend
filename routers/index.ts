import { ServerRoute } from "@hapi/hapi";
// import { GetTest } from "../controller";

const routes: ServerRoute[] = [
  {
    method: "GET",
    path: "/user",
    // handler: GetTest,
  },
];

export default routes;
