import { Gender } from "@utils/index";

export const fakeContacts = [
    {
        id: 'sfsdf',
        name: 'Example Name',
        email: 'example@mail.com',
        gender: Gender.Female,
        phoneNumbers: [
            { number: '24568439874' },
            { number: '65164516355' },
        ],
        dob: new Date()
    },
    {
        id: '3561',
        name: 'Some Name',
        email: 'some@mail.com',
        gender: Gender.Male,
        phoneNumbers: [
            { number: '46154751515' },
            { number: '88885557555' },
        ],
        dob: new Date()
    },
];