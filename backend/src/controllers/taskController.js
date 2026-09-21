const Task = require('../models/taskModel');

exports.createTask = async(req,res) => {
    try{
        const {tarefa} = req.body;
        const newTask = await Task.create(tarefa);
        res.status(201).json(newTask);
    }
    catch{
        res.status(500).json({erro: console.error.message})
    }
};