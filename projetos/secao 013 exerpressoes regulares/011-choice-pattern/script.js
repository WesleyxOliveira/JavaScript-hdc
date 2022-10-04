const reg = /\w+: (Wesley|João|Maria)/;

console.log(reg.test('Nome: Wesley'));
console.log(reg.test('Nome: José'));
console.log(reg.test('Nome: Maria'));