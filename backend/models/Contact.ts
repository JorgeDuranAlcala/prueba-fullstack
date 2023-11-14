import { sequelize } from "../sequelize";
import { Model, DataTypes } from "sequelize";

export class Contact extends Model {}

Contact.init(
  {
    id: {
      primaryKey: true,
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    modelName: "contacts",
  }
);
