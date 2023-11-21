export type Todo = {
  userId: number
  id: number
  title: string
  completed: boolean
}

export enum Gender {
  Male = 'male',
  Female = 'female',
}

export interface Contact {
  id: string;
  name: string;
  email: string;
  gender: 'male' | 'female';
}
