/* const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Todo = new Schema({
    todo_description: {
        type: String
    },
    todo_responsible: {
        type: String
    },
    todo_priority: {
        type: String
    },
    todo_completed: {
        type: Boolean
    }
});

module.exports = mongoose.model('Todo', Todo); */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

dbPassword = 'mongodb+srv://alper:Q1w2e3r4@myfirstclustor.r7mci.mongodb.net/MyFirstClustor?retryWrites=true&w=majority';



// Connect to MongoDB
mongoose
  .connect(
    dbPassword,
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

  const TaskSchema = Schema({
    todo_description: {
        type: String
    },
    todo_responsible: {
        type: String
    },
    todo_priority: {
        type: String
    },
    todo_completed: {
        type: Boolean
    }
  });
  
  module.exports = mongoose.model('Todo', TaskSchema);
