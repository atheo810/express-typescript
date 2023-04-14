import { log } from "console";
import express from "express";
function main() {
  const app = express();
  const port = 5000;

  app.get("/", (req, res) => res.send("Express + TypeScript Server"));
  app.listen(port, () => {
    console.log(`[server] server dimulai di http://localhost:${port}`);
  });
}
main();
