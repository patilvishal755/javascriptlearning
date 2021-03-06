const person = {
  first: 'Vishal',
  last: 'Patil',
  location: {
    city: 'Pune',
    state: 'MH'
  }
}

const {first, last, middle = 'Bhagwan', age} = person // object Destructering
console.log(first)
console.log(last)
console.log(middle) // default value if undefined
console.log(age) // undefined

const {city} = person.location
console.log(city)

const {first: fname, last: lname} = person // Object Destructing with change key name
console.log(`fname is ${fname}`)
console.log(`lname is ${lname}`)
