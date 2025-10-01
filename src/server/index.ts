import express from "express";
export const app = express();

import dotenv from "dotenv";
import helloRoute from "./routes/helloRoute";

dotenv.config();

app.use("/api", helloRoute);

if (!process.env["VITE"]) {
  const frontendFiles = process.cwd() + "/dist";
  app.use(express.static(frontendFiles));
  app.get("/*", (_, res) => {
    res.send(frontendFiles + "/index.html");
  });
  app.listen(process.env["PORT"]);
}
