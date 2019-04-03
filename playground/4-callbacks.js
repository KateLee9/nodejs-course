const log = console.log

setTimeout(() =>{
    log('Two seconds are up!')
}, 2000)

const names = ['Kate', 'Ken', "Kathy"]
const shortNames = names.filter((name) => {
    return name.length <= 4
})

const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 0,
            longitude: 0
        }
        callback(data)
    }, 2000 )
}

geocode('Philadelphia', (data) =>{
    log(data)
}) 

const add = (num1, num2, callback) => {
    var sum = num1 + num2
    setTimeout(() => {
        console.log('2 seconds up! Here\'s your answer!')
        callback(sum)
    }, 2000)
}

add(1, 3000, (sum) => {
    console.log(sum) // Should print: 5
})