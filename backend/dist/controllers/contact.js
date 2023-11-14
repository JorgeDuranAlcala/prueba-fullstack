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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactController = void 0;
class ContactController {
    constructor(contactService) {
        this.contactService = contactService;
        /**
         * create
         */
        this.create = (req, res) => {
            const contact = req.body;
            const newContact = this.contactService.insert(contact);
            return res.status(201).send(newContact);
        };
        /**
         * get
         */
        this.get = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const contacts = yield this.contactService.get();
            console.log("controller", contacts);
            return res.status(200).send(contacts);
        });
        /**
         * update
         */
        this.update = (req, res) => {
            const id = req.params.id;
            const updated = this.contactService.update(id, req.body);
            return res.status(200).send(updated);
        };
        /**
         * remove
         */
        this.remove = (req, res) => {
            const id = req.params.id;
            const removed = this.contactService.remove(id);
            return res.status(200).send(removed);
        };
    }
}
exports.ContactController = ContactController;
