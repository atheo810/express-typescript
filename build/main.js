"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_1 = require("./router/router");
const app_1 = require("./app");
function main() {
    const app = (0, express_1.default)();
    const port = 5000;
    app.use(router_1.router);
    app.get("/timezones", app_1.getLocationsWithTimezones);
    app.listen(port, () => {
        console.log(`[server] server dimulai di http://localhost:${port}`);
    });
}
main();
