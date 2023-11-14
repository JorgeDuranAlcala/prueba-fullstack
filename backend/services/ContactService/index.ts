import { ContactRepository } from "../../infrastructure/ContactRepo";
import { ContactService } from "./ContactService";

const contactRepo = new ContactRepository();

export default new ContactService(contactRepo);
