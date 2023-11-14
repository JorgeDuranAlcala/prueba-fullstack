export interface IContact {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
}

export class Contact implements IContact {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;

  constructor(props: IContact) {
    this.id = props.id;
    this.name = props.name;
    this.email = props.email;
    this.phoneNumber = props.phoneNumber;
  }
}
