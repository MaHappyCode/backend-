import mongoose from "mongoose";
import Book from "../model/Book.js";
import fp from "fastify-plugin";

async function database(server, options) {
  try {
    mongoose.connection.on("connected", () => {
      server.log.info({ actor: "DB" }, "connected!");
    });

    mongoose.connection.on("disconnected", () => {
      server.log.info({ actor: "DB" }, "disconnected! :( ");
    });

    await mongoose.connect(
      "mongodb+srv://Dani:Dani123456@cluster0.bmd2ksj.mongodb.net/?retryWrites=true&w=majority"
    );

    // add all models to servers
    const models = { Book };
    server.addHook("onRequest", async (request, response) => {
      request.db = { models };
    });
  } catch (error) {}
}

export default fp(database);
