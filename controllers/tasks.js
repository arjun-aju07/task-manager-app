import Task from '../models/Task.js'

import asyncWrapper from '../middleware/async-wrapper.js'

import { createCustomError } from '../errors/custom-error.js'

const getAllTasks = asyncWrapper(async (req, res) => {
    const tasks = await Task.find({}) // will get all documents
    res
        .status(200)
        .json({ tasks })
})

const createTask = asyncWrapper(async (req, res) => {
    const task = await Task.create(req.body)
    res
        .status(201)
        .json({ task })
})

const getTask = asyncWrapper(async (req, res, next) => {
    const { id: taskId } = req.params

    const task = await Task.findOne({ _id: taskId }) // will return null if document doesn't exist

    if(!task) {
        return next(createCustomError(`No task found with ID ${taskId}`, 404))
    }

    res
        .status(200)
        .json({ task })
})

const updateTask = asyncWrapper(async (req, res) => {
    const { id: taskId } = req.params

    const task = await Task.findOneAndUpdate( // will return null if document doesn't exist // method takes body and options as arguments
        { _id: taskId },
        req.body,
        {
            new: true,
            runValidators: true
        }
    )

    if(!task) {
        return next(createCustomError(`No task found with ID ${taskId}`, 404))
    }

    res
        .status(200)
        .json({ task })
})

const deleteTask = asyncWrapper(async (req, res) => {
    const { id: taskId } = req.params

    const task = await Task.findOneAndDelete({ _id: taskId }) // will return null if document doesn't exist

    if(!task) {
        return next(createCustomError(`No task found with ID ${taskId}`, 404))
    }

    res
        .status(200)
        .json({ task })
})

export {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}