"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactRepository = void 0;
const crypto_1 = __importDefault(require("crypto"));
const Contact_1 = require("../models/Contact");
const contact_1 = require("../domain/contact");
class ContactRepository {
    constructor() {
        this.contacts = [
            {
                id: crypto_1.default.randomUUID(),
                name: "john",
                email: "john@due.com",
                phoneNumber: "+584267472630",
            },
        ];
    }
    /**
     * insert
     */
    create(contact) {
        return __awaiter(this, void 0, void 0, function* () {
            const newContact = Object.assign(Object.assign({}, contact), { id: crypto_1.default.randomUUID() });
            yield Contact_1.Contact.create(newContact);
            yield Contact_1.Contact.findOne({ where: { id: newContact.id } });
            return new contact_1.Contact(newContact);
        });
    }
    /**
     * remove
     */
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const contact = yield Contact_1.Contact.findOne({ where: { id } });
            if (!contact)
                return false;
            yield Contact_1.Contact.destroy({ where: { id } });
            return true;
        });
    }
    /**
     * get
     */
    get() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield Contact_1.Contact.findAll();
            const contacts = result.map((r) => new contact_1.Contact(r.dataValues));
            console.log(contacts);
            return contacts;
        });
    }
    /**
     * update
     */
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const contact = yield Contact_1.Contact.findOne({ where: { id } });
            if (!contact)
                return false;
            yield Contact_1.Contact.update(data, { where: { id } });
            return true;
        });
    }
}
exports.ContactRepository = ContactRepository;
