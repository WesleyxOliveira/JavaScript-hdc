const notab = /[^ab]/;

console.log(notab.test("a"));
console.log(notab.test("Aqui tem a"));
console.log("");

const nottoaz = /[^a-z]/;

console.log(nottoaz.test("123 ab"));
