export enum Gender {
  Male = "male",
  Female = "female"
}

export interface IContact {
  id: string;
  name: string;
  email: string;
  gender: Gender | null;
  phoneNumber: string;
  message: string;
}
