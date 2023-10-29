const getAllTasks = (req, res) => {
    res.send('Returns all the tasks')
}

const createTask = (req, res) => {
    res.json(req.body)
}

const getTask = (req, res) => {
    res.send('Returns a specific task')
}

const updateTask = (req, res) => {
    res.send('Updates task')
}

const deleteTask = (req, res) => {
    res.send('deletes task')
}

export {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}