import { Gender, IContact } from "@utils/index";

export const fakeContacts: IContact[] = [
  {
    id: "sfsdf",
    name: "Example Name",
    email: "example@mail.com",
    gender: Gender.Female,
    phoneNumber: "24568439874",
    message: "Example message"
  },
  {
    id: "3561",
    name: "Some Name",
    email: "some@mail.com",
    gender: Gender.Male,
    phoneNumber: "46154751515",
    message: "Some message"
  }
];

// export const fakeContacts = [
//   {
//     id: "sfsdf",
//     name: "Example Name",
//     email: "example@mail.com",
//     gender: Gender.Female,
//     phoneNumbers: [{ number: "24568439874" }, { number: "65164516355" }],
//     dob: new Date()
//   },
//   {
//     id: "3561",
//     name: "Some Name",
//     email: "some@mail.com",
//     gender: Gender.Male,
//     phoneNumbers: [{ number: "46154751515" }, { number: "88885557555" }],
//     dob: new Date()
//   }
// ];
