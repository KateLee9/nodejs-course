var getUser = (id, callback) =>{
    var user = {
        id: id,
        name: 'Kate'
    };
    setTimeout(() => {
        callback(user); //callback function runs when user data is return
    } , 1000);
};

getUser(49, (user) => {
    console.log(user)
})