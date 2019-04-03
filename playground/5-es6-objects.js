//object property shorthand

const name = 'Kate'
const userAge = 22

const user = {
    name,
    age: userAge
}

console.log(user)

//object destructuring

const product = {
    label: 'Black notebook',
    price: 4,
    stock: 201,
    salePrice: undefined
}

// const {label:productLabel, price, rating = 9} = product
// console.log(productLabel)
// console.log(price)
// console.log(rating)

const transaction = (type, { label, stock }) => {
    console.log(type, label, stock)
}

transaction('order', product)