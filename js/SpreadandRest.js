const doSomething = function (x, y, z) {
  return x + y + z
}
const array = [1, 2, 3]
console.log(doSomething(...array)) // spread Opertaor

const array1 = ['One', 'Two', 'Three']
const array2 = ['four', 'five']
array1.push(...array2)
console.log(array1)

const array3 = [...array2] // just like array.slice() does not point to same reference,instead creates new array
console.log(array3)

const array4 = ['One', 'Two', 'Three', ...array3, 'six'] // can use in array
console.log(array4)

const person = {first: 'vishal', last: 'patil', location: {city: 'Pune', state: 'Mh'}}
const {first, ...restall} = person // can use spread operator to extract from object and array also
console.log(restall)

// Rest operator

const doSomethingBetter = function (x, ...numbers) {
  console.log(`x is ${x}`)
  console.log(`numbers are ${numbers}`)
}
doSomethingBetter(10, 20, 30, 40)
