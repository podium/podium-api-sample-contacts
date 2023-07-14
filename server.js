import { app } from "./index.js";
import fs from "fs";
import { createServer } from "https";

const key = fs.readFileSync("./certs/key.pem");
const cert = fs.readFileSync("./certs/cert.pem");
const server = createServer({ key: key, cert: cert }, app);

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
