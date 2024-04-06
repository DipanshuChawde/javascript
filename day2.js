// // AND - && 
// // true   &&    true  =======> true 
// // false  &&    true  =======> false 
// // true   &&    false =======> false 
// // false  &&    false =======> false

console.log(7==7 && 7==7)
console.log(7==7 && 7 != 7)
console.log(7==6 && 7==7)
console.log(7!=7 && 7>8)
console.log()
console.log()
// console.log(7 == 7 && 6 == 6)
// console.log(8 == 6 && 7 == 7)
// console.log(9 == 9 && 8 == 7)
// console.log(7 != 7 && 8 != 8)

// // OR  - ||

// // true  ||   true  =====> true 
// // false ||   true  =====> true
// // true  ||   false =====> true
// // false ||   false =====> false

console.log(66 == 66 || 77 == 77)
console.log(66 != 66 || 77 == 77)
console.log(66 == 66 || 77 != 77)
console.log(66 != 66 || 77 != 77)
console.log()
console.log()
// // NOT   - !

// // true   =====> false 
// // false  ======> true 

console.log(!6 == 6)
console.log(!8 == 8)
console.log(!(8 === '8'))

console.log()
console.log()
// Logical operator

// && - AND 

// true  &&    true  ======> true 
// false &&    true  ======> false
// true  &&    false ======> false 
// false &&    false ======> false

console.log(6 == 6 && 7 == 7)
console.log(5 != 5 && 7 ==7)
console.log(5 != 6 && 7 !=7)
console.log(5 == 6 && 7 == 8)
console.log()
console.log()
// ||  - OR 

// true   || true  =====> true 
// false  || true  =====> true
// true   || false =====> true 
// false  || false =====> false

console.log(7 == 7 || 8 == 8)
console.log(7 != 7 || 8 == 8)
console.log(7 == 7 || 8 != 8)
console.log(7 != 7 || 8 != 8)
console.log()
console.log()

// ! - NOT
// true -----> false 
// false -----> true 
console.log(!(7 === '7'))
console.log(!(7 == '7'))