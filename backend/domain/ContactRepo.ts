import { IContact } from "./contact";

export interface ContactRepo {
  create(data: Omit<IContact, "id">): Promise<IContact>;
  get(): Promise<IContact[]>;
  update(id: string, data: Partial<IContact>): Promise<boolean>;
  remove(id: string): Promise<boolean>;
}
