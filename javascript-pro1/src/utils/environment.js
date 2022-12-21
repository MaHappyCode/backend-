import * as dotnev from "dotenv";
import path from "path";

const dirname = path.resolve();

dotnev.config();

if (!process.env.NODE_ENV) {
  throw "No Vaild environment set!";
}

const NODE_ENV = process.env.NODE_ENV;
const envPath = path.resolve(dirname, ".env.${NODE_ENV}");

dotnev.config({ path: envPath });

const environment = {
  NODE_ENV,
  MESSAGE: process.env.MESSAGE || "No Message",
  PORT: Number(process.env.PORT) || 3000,
};

export default environment;
