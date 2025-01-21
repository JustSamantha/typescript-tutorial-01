interface Contact {
    id: number;
    name: string;
}

function clone(source:Contact):Contact {
    return JSON.parse(JSON.stringify(source));
}

let myContact:Contact = {
  id: 1,
  name: "Samantha Castillo",
}

let myOtherContact:Contact = clone(myContact);

myContact.id = 2;
myOtherContact.id = 3;

console.log(myContact);
console.log(myOtherContact);
