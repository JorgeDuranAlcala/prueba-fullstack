import { ContactRepo } from "../domain/ContactRepo";
import { IContact } from "../domain/contact";
import crypto from "crypto";

export class InMemoryContactRepo implements ContactRepo {
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
    this.contacts.push(newContact);
    return newContact;
  }

  /**
   * remove
   */
  public async remove(id: string) {
    const contact = this.contacts.find((c) => c.id === id);
    if (!contact) return false;
    this.contacts = this.contacts.filter((c) => c.id !== id);
    return true;
  }

  /**
   * get
   */
  public async get() {
    return this.contacts;
  }

  /**
   * update
   */
  public async update(id: string, data: Partial<IContact>) {
    const contact = this.contacts.find((c) => c.id === id);
    if (!contact) return false;
    this.contacts = this.contacts.map((contact) =>
      contact.id === id ? { ...contact, ...data } : contact
    );
    return true;
  }
}
