"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const controllers_1 = require("./controllers");
const sequelize_1 = require("./sequelize");
dotenv_1.default.config();
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.PORT = Number(process.env.PORT) | 4000;
    }
    /**
     * init
     */
    init() {
        console.log(process.env.DATABASE_URL);
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        try {
            sequelize_1.sequelize.authenticate();
            console.log("Connection has been established successfully.");
        }
        catch (error) {
            console.error("Unable to connect to the database:", error);
        }
        this.app.use("/v1", this.routes());
        this.app.listen(this.PORT, () => console.log("Server listening on port: " + this.PORT));
    }
    /**
     * routes
     */
    routes() {
        const router = express_1.default.Router();
        router.get("/agenda", controllers_1.contactController.get);
        router.post("/agenda", controllers_1.contactController.create);
        router.put("/agenda/:id", controllers_1.contactController.update);
        router.delete("/agenda/:id", controllers_1.contactController.remove);
        return router;
    }
}
exports.default = App;
