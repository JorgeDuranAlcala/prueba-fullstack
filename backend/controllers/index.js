"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactController = void 0;
const ContactService_1 = __importDefault(require("../services/ContactService"));
const contact_1 = require("./contact");
const contactController = new contact_1.ContactController(ContactService_1.default);
exports.contactController = contactController;
