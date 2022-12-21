import * as controllers from "./controllers.js";
import * as schemas from "./schemas.js";

async function BookRoutes(server, options) {
  server.route({
    method: "POST",
    url: "/books",
    schemas: schemas.AddBookSchema,
    handler: controllers.AddBookController,
  });

  server.route({
    method: "GET",
    url: "/books",
    schema: schemas.GetBooksController,
    handler: controllers.GetBooksController,
  });

  server.route({
    method: "DELETE",
    url: "/books",
    shcmea: schemas.DeleteBookSchema,
    handler: controllers.DeleteBookController,
  });
}

export default BookRoutes;
