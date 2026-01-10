// npx tsx src/notes/array.ts
const a = new ArrayBuffer(8) // Creates continuous memory buffer for 8 Bytes
const b = new Uint8Array(a) // Create a View on top of "a", of Uint8 type, total numbers = 8
const c = new Uint16Array(a) // Create a View on top of "a", of Uint16 types, total numbers = 4

console.log(a)
b[0] = 1
console.log(a)
c[1] = 1
console.log(a)
