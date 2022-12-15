"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const database_service_1 = require("./services/database.service");
const paintings_router_1 = require("./routes/paintings.router");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
const port = 8080; // default port to listen
(0, database_service_1.connectToDatabase)()
    .then(() => {
    app.use("/paintings", paintings_router_1.paintingsRouter);
    app.listen(port, () => {
        console.log(`Server started at http://localhost:${port}`);
    });
})
    .catch((error) => {
    console.error("Database connection failed", error);
    process.exit();
});
//# sourceMappingURL=index.js.map