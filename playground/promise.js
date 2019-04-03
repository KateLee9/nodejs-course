var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else {
                reject('Arguments must be numbers')
            }
        }, 1500);
    });
};

asyncAdd(5, '7').then((total) => {
    console.log('Total: ', total)
    return asyncAdd(total, 33);
}).then((total) => {
    console.log('Should be 45 ', total)
}).catch((errorMessage) => {
    console.log(errorMessage)
})

// var somePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Hey it worked!');
//         reject('Unable to fulfill promise');
//     }, 2500);
// });

// somePromise.then((message) => {
//     console.log('Success: ', message);
// }, (errorMessage) => {
//     console.log('Error: ', errorMessage);
// })