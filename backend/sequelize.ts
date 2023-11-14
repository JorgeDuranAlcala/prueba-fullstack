import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();
// sequelize initialization

// development mode

export const sequelize = new Sequelize(
  process.env.DB_DATABASE ?? "prueba",
  process.env.DB_USER ?? "root",
  process.env.DB_PASSWORD ?? "",
  {
    host: process.env.DB_HOST ?? "localhost",
    dialect: "mysql",
  }
);
