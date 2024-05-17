import "reflect-metadata";
import Hapi from "@hapi/hapi";
import routes from "./routers";
import { AppDataSource } from "./data-source/db.config";

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: "localhost",
  });

  await server.start();

  server.route(routes);

  AppDataSource.initialize()
    .then(() => {
      console.log("Server running on %s", server.info.uri);
      console.log("database connected");
    })
    .catch((error) => console.log(error));
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
