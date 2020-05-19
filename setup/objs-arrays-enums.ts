const person: { name: string, age: number } = {
  name: "Adhikansh",
  age: 30
}
console.log(person.name);

const product: {
  id: string,
  price: number,
  tags: string[],
  details: {
    title: string,
    description: string
  },
  role: [number, string]
} = {
  id: '1234',
  price: 12.99,
  tags: ['great-offer', 'hot-and-new'],
  details: {
    title: 'Red Carpet',
    description: 'A great carpet - almost brand-new!'
  },
  role: [2, 'author'] // tuple
}

product.role[1] = 'Adhikansh'
// product.role = [] invalid
product.role = [7, 'Aug']
product.role.push(9);

console.log(product);

// enum Role { ADMIN, READ_ONLY, AUTHOR };
// console.log(Role.ADMIN);

// help at the time of comparing in condition loop
enum Role { ADMIN = 5, READ_ONLY = 12, AUTHOR = 'AUTHOR' };