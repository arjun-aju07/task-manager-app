import mongoose from 'mongoose'

// sets schema - representation of the collection
const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must provide name'], // array with boolean and error message that should be thrown
        trim: true, // will remove unwanted white space
        maxLength: [30, 'name cannot be more than 30 characters'] // max length validation in case of string
    },
    isCompleted: {
        type: Boolean,
        default: false
    }
})

// model - provides interface between database and app to create, query etc, will be used in controller
export default mongoose.model('Task', TaskSchema) // method expects model name and schema