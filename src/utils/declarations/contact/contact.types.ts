export enum Gender {
  Male = 'male',
  Female = 'female',
}

interface IPhoneNumber {
  number: string;
}

export interface IContact {
  id: string;
  name: string;
  email: string;
  gender: Gender | null;
  phoneNumbers: IPhoneNumber[];
  dob: Date
}
