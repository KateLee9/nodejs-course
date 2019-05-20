require('../src/db/mongoose');
const User = require('../src/models/user');

//5cd24f86c3fbbd520cb8928a

// User.findByIdAndUpdate('5cd25233c7fd8555e85363b6', { age: 1 }).then((user) => {
//   console.log(user)
//   return User.countDocuments({ age: 1 })
// }).then((result) => {
//   console.log(result);
// }).catch((e) => {
//   console.log(e);
// })

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age })
  const count = await User.countDocuments({ age })
  return count
}

updateAgeAndCount('5cd25233c7fd8555e85363b6', 2).then((count) => {
  console.log(count);
}).catch((e) => {
  console.log(e);
})