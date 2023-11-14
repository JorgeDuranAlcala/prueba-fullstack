import ContactService from "../services/ContactService";
import { ContactController } from "./contact";

const contactController = new ContactController(ContactService);

export { contactController };
