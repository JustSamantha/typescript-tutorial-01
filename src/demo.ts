type ContactName = string;
type ContactStatus = "active" | "inactive" | "new"
type ContactBirthDate = Date | number | string

interface Contact  {
    id: number;
    name: ContactName;
    birthDate?: ContactBirthDate;
    status?: ContactStatus;
}

let primaryContact: Contact = {
    id: 12345,
    name: "Jamie Johnson",
    status: "active",
    birthDate: "08-04-1986"
}

type ContactFields = keyof Contact;

function getValue<T, U extends keyof T>(source:T, property:U) {
    return source[property];
}

console.log(getValue(primaryContact, "birthDate"));
