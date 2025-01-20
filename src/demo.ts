interface Contact extends Address {
  id:number;
  name:string;
  birthdate?:Date;
}

interface Address {
  line1:string;
  line2?:string;
  city:string;
  state:string;
  postalCode:string;
}

let primaryContact:Contact = {
  id: 123456,
  name: "Samantha Castillo",
  line1: "address line 1",
  line2: "address line 2",
  city: "my city",
  state: "CA",
  postalCode: "98763-89",
}

console.log(primaryContact);