import { IContact } from "../../domain/contact";
import { ContactRepository } from "../../infrastructure/ContactRepo";

export class ContactService {
  constructor(private contactRepo: ContactRepository) {}

  static create = (contactRepo: ContactRepository) => {
    return new ContactService(contactRepo);
  };

  /**
   * insert
   */
  public insert = (contact: Omit<IContact, "id">) => {
    return this.contactRepo.create(contact);
  };

  /**
   * remove
   */
  public remove = (id: string) => {
    return this.contactRepo.remove(id);
  };

  /**
   * get
   */
  public get = () => {
    return this.contactRepo.get();
  };

  /**
   * update
   */
  public update = (id: string, data: Partial<IContact>) => {
    return this.contactRepo.update(id, data);
  };
}
