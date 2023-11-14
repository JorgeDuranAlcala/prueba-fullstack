import axios from "axios";

const URL = "http://localhost:4000/v1";

export interface IContact {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
}

class ContactService {
  async getAll(): Promise<IContact[]> {
    const { data } = await axios.get(`${URL}/agenda`);
    return data;
  }

  async create(body: Omit<IContact, "id">) {
    const { data } = await axios.post(`${URL}/agenda`, body);
    return data;
  }
  async edit(id: string, body: Partial<IContact>) {
    const { data } = await axios.put(`${URL}/agenda/${id}`, body);
    return data;
  }
  async delete(id: string) {
    const { data } = await axios.delete(`${URL}/agenda/${id}`);
    return data;
  }
}

const contactService = new ContactService();
export default contactService;
