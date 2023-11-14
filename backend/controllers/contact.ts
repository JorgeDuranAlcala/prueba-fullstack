import { Request, Response } from "express";
import { ContactService } from "../services/ContactService/ContactService";

export class ContactController {
  constructor(private contactService: ContactService) {}

  /**
   * create
   */
  public create = (req: Request, res: Response) => {
    const contact = req.body;
    const newContact = this.contactService.insert(contact);
    return res.status(201).send(newContact);
  };

  /**
   * get
   */
  public get = async (req: Request, res: Response) => {
    const contacts = await this.contactService.get();
    console.log("controller", contacts);
    return res.status(200).send(contacts);
  };

  /**
   * update
   */
  public update = (req: Request, res: Response) => {
    const id = req.params.id;
    const updated = this.contactService.update(id, req.body);
    return res.status(200).send(updated);
  };

  /**
   * remove
   */
  public remove = (req: Request, res: Response) => {
    const id = req.params.id;
    const removed = this.contactService.remove(id);
    return res.status(200).send(removed);
  };
}
