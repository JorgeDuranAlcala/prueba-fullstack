"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contact = void 0;
const sequelize_1 = require("../sequelize");
const sequelize_2 = require("sequelize");
class Contact extends sequelize_2.Model {
}
exports.Contact = Contact;
Contact.init({
    id: {
        primaryKey: true,
        type: sequelize_2.DataTypes.STRING,
        allowNull: false,
    },
    name: {
        type: sequelize_2.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_2.DataTypes.STRING,
        allowNull: false,
    },
    phoneNumber: {
        type: sequelize_2.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: sequelize_1.sequelize,
    timestamps: false,
    modelName: "contacts",
});
