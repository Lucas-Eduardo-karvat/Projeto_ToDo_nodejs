const db = require('../config/db')

class Task{
    constructor (id, tarefa, realizada){
        this.id = id;
        this.tarefa = tarefa;
        this.realizada = realizada ? true : false;
    }
}
const taskModel = {
    //criar tabela no banco de dadods
    create : async (tarefa) =>{
    const [result] = await db.query('INSERT INTO tasks (tarefa) VALUES (?)', [tarefa]);
    return new Task(result.insertId, tarefa,false);
    },

    // lista as tarefas cadastradas
    findAll : async()=>{
        const [rows] = await db.query('select * from tasks');
        return rows.map(row=> new Task(row.id,row.tarefa,row.realizada))
    }
};

module.exports = taskModel;