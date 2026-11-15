const original = {
  name: "Bob",
  age: 30,
};

const copy = { ...original };
copy.name = "Charlie";

console.log("original:", original);
console.log("copy:", copy);
