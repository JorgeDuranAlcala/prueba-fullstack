import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { contactController } from "./controllers";
import { sequelize } from "./sequelize";
dotenv.config();

class App {
  private app: Application = express();
  private readonly PORT = Number(process.env.PORT) | 4000;

  /**
   * init
   */
  public init() {
    console.log(process.env.DATABASE_URL);
    this.app.use(cors());
    this.app.use(express.json());

    try {
      sequelize.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }

    this.app.use("/v1", this.routes());

    this.app.listen(this.PORT, () =>
      console.log("Server listening on port: " + this.PORT)
    );
  }

  /**
   * routes
   */
  public routes() {
    const router = express.Router();
    router.get("/agenda", contactController.get);
    router.post("/agenda", contactController.create);
    router.put("/agenda/:id", contactController.update);
    router.delete("/agenda/:id", contactController.remove);

    return router;
  }
}

export default App;
