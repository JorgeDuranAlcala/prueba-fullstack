import { IContact } from "../domain/contact";
import crypto from "crypto";
import { Contact } from "../models/Contact";
import { Contact as ContactEntity } from "../domain/contact";

export class ContactRepository {
  private contacts: IContact[] = [
    {
      id: crypto.randomUUID(),
      name: "john",
      email: "john@due.com",
      phoneNumber: "+584267472630",
    },
  ];

  /**
   * insert
   */
  public async create(contact: Omit<IContact, "id">) {
    const newContact = { ...contact, id: crypto.randomUUID() };
    await Contact.create(newContact);
    await Contact.findOne({ where: { id: newContact.id } });
    return new ContactEntity(newContact);
  }

  /**
   * remove
   */
  public async remove(id: string) {
    const contact = await Contact.findOne({ where: { id } });
    if (!contact) return false;
    await Contact.destroy({ where: { id } });
    return true;
  }

  /**
   * get
   */
  public async get() {
    const result = await Contact.findAll();
    const contacts = result.map((r) => new ContactEntity(r.dataValues));
    console.log(contacts);
    return contacts;
  }

  /**
   * update
   */
  public async update(id: string, data: Partial<IContact>) {
    const contact = await Contact.findOne({ where: { id } });
    if (!contact) return false;
    await Contact.update(data, { where: { id } });
    return true;
  }
}
