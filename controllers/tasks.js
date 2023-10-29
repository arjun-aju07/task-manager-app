import Task from '../models/Task.js'

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({}) // will get all documents
        res
            .status(200)
            .json({ tasks })
    } catch (e) {
        res
            .status(500)
            .json({ message: e })
    }
}

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res
            .status(201)
            .json({ task })
    } catch (e) {
        res
            .status(500)
            .json({ message: e })
    }
}

const getTask = async (req, res) => {
    const { id: taskId } = req.params

    try {
        const task = await Task.findOne({ _id: taskId }) // will return null if document doesn't exist

        if(!task) {
            return res
                .status(404)
                .json({ message: `No task found with ID ${taskId}` })
        }

        res
            .status(200)
            .json({ task })
    } catch (e) {
        res
        .status(500)
        .json({ message: e })
    }
}

const updateTask = async (req, res) => {
    const { id: taskId } = req.params

    try {
        const task = await Task.findOneAndUpdate( // will return null if document doesn't exist // method takes body and options as arguments
            { _id: taskId },
            req.body,
            {
                new: true,
                runValidators: true
            }
        )

        if(!task) {
            return res
                .status(404)
                .json({ message: `No task found with ID ${taskId}` })
        }

        res
            .status(200)
            .json({ task })
    } catch (e) {
        res
            .status(500)
            .json({ message: e })
    }
}

const deleteTask = async (req, res) => {
    const { id: taskId } = req.params

    try {
        const task = await Task.findOneAndDelete({ _id: taskId }) // will return null if document doesn't exist

        if(!task) {
            return res
                .status(404)
                .json({ message: `No task found with ID ${taskId}` })
        }

        res
            .status(200)
            .json({ task })
    } catch (e) {
        res
            .status(500)
            .json({ message: e })
    }
}

export {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}