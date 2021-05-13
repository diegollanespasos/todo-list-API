const mongoose = require('mongoose');

const ToDoSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true
    },
    description: {
        type: String,
        trim: true,
        required: true
    },
    date:{
        type:Date,
        required: true,
        default:Date.now()
      }
})

module.exports = mongoose.model('Todo', ToDoSchema);