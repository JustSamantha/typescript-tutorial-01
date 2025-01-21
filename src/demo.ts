interface Contact {
    id: number;
    name: string;
}

interface UserContact {
  id: number;
  name: string;
  dob: Date;
}

function clone<T1, T2 extends T1>(source: T1): T2 {
    return JSON.parse(JSON.stringify(source));
}

const a: Contact = { id: 123, name: "Homer Simpson" };
const b = clone<Contact, UserContact>(a);

console.log(a);
console.log(b);
