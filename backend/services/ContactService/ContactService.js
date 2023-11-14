"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactService = void 0;
class ContactService {
    constructor(contactRepo) {
        this.contactRepo = contactRepo;
        /**
         * insert
         */
        this.insert = (contact) => {
            return this.contactRepo.create(contact);
        };
        /**
         * remove
         */
        this.remove = (id) => {
            return this.contactRepo.remove(id);
        };
        /**
         * get
         */
        this.get = () => {
            return this.contactRepo.get();
        };
        /**
         * update
         */
        this.update = (id, data) => {
            return this.contactRepo.update(id, data);
        };
    }
}
exports.ContactService = ContactService;
ContactService.create = (contactRepo) => {
    return new ContactService(contactRepo);
};
