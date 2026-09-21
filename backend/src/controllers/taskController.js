const Task = require('../models/taskModel');

exports.createTask = async(req,res) => {
    try{
        const {tarefa} = req.body;
        const newTask = await Task.create(tarefa);
        res.status(201).json(newTask);
    }
    catch(error){
        res.status(500).json({erro:error.message})
    }
};


exports.getAllTasks = async(req,res) => {
    try{
        const tasks = await Task.findAll();
        res.json(tasks);
    }
    catch(error){
        res.status(500).json({erro : error.message});
    }
}