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
exports.InMemoryContactRepo = void 0;
const crypto_1 = __importDefault(require("crypto"));
class InMemoryContactRepo {
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
            this.contacts.push(newContact);
            return newContact;
        });
    }
    /**
     * remove
     */
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const contact = this.contacts.find((c) => c.id === id);
            if (!contact)
                return false;
            this.contacts = this.contacts.filter((c) => c.id !== id);
            return true;
        });
    }
    /**
     * get
     */
    get() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.contacts;
        });
    }
    /**
     * update
     */
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const contact = this.contacts.find((c) => c.id === id);
            if (!contact)
                return false;
            this.contacts = this.contacts.map((contact) => contact.id === id ? Object.assign(Object.assign({}, contact), data) : contact);
            return true;
        });
    }
}
exports.InMemoryContactRepo = InMemoryContactRepo;
