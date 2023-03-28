export interface ContactListInterface {
  contacts: ContactInterface[];
}

export interface ContactInterface {
  firstName: string;
  email: string;
}

export interface ContactFormValues {
  firstName: string;
  email: string;
}
