import { log } from "console";
import express from "express";
import { router } from "./router/router";

import { getLocationsWithTimezones } from "./app";
function main() {
  const app = express();
  const port = 5000;
  app.use(router);

  app.get("/timezones", getLocationsWithTimezones);
  app.listen(port, () => {
    console.log(`[server] server dimulai di http://localhost:${port}`);
  });
}

main();
