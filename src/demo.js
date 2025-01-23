let primaryContact = {
    id: 12345,
    name: "Jamie Johnson",
    status: "active",
    birthDate: "08-04-1986"
};
function getValue(source, property) {
    return source[property];
}
console.log(getValue(primaryContact, "birthDate"));
