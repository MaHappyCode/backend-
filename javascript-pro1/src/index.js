import fastify from "fastify";
import environment from "./utils/environment.js";
import BookRoutes from "./routes.js";
import database from "./utils/db.js";

const server = fastify({ logger: true });

const start = async () => {
  try {
    await server.register(database);

    await server.register(BookRoutes);

    await server.listen({ port: environment.PORT });
    console.log("Server is running!!!!!!");
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
