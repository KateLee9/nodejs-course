require('../src/db/mongoose') 
const Task = require('../src/models/task');

// Task.findByIdAndRemove('5cd7d4d74e7ac6448aea094b').then((task ) => {
//   console.log(task);
//   return Task.countDocuments({ completed: true});
// }).then((result) => {
//   console.log(result);
// }).catch((e) => {
//   console.log(e);
// })

const deleteTaskAndCount = async (id) => {
  await Task.findByIdAndRemove(id)
  const count = await Task.countDocuments({completed: true})//2
  return count
}

deleteTaskAndCount('5cd7f33eaf5261c2fe350a9b').then((count) => {
  console.log(count);
}).catch((e) => {
  console.log(e);
})