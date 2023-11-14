"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ContactRepo_1 = require("../../infrastructure/ContactRepo");
const ContactService_1 = require("./ContactService");
const contactRepo = new ContactRepo_1.ContactRepository();
exports.default = new ContactService_1.ContactService(contactRepo);
