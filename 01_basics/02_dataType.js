const accountId = 1001;
let name = "Nur";
let isActive = true;
let email = "nur@gmail.com";

const Id = Number(accountId)

const newId = Symbol(accountId)
const newId2 = Symbol(accountId)

let userName;

console.log(typeof accountId);
console.log(typeof name);
console.log(typeof isActive);
console.log(typeof email);
console.log(newId);
console.log(accountId === Id);
console.log(accountId === newId);
console.log(typeof newId);
console.log(newId === newId2);
console.log(typeof null);
console.log(typeof userName);

