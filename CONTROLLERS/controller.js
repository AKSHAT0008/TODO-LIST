const toDoList = require("/Decode Full stack Web Dev/TODO-LIST/MODELS/model.js")
//Fetching whole list
let Id = 3;
exports.getWholeList = (req, res) => {
    res.send(toDoList)
}
exports.createTask = (req, res) => {
    task = req.body;
    Id++;
    task["Id"] = Id;
    toDoList[Id] = task;
    // res.send("Task added:-")
    res.status(201).send(task)
}
exports.editTask = (req, res) => {
    taskId = req.params.Id;
    if (toDoList[taskId]) {
        updatedTask = req.body;
        toDoList[taskId] = updatedTask;
        res.send(toDoList[taskId]);
    }
    else {
        return res.status(404).send("ID not found")
    }
}
exports.checkmark = (req, res) => {
    taskId = req.params.Id
    if (toDoList[taskId]) {
        taskStatus = req.body
        if (taskStatus == "completed") {
            toDoList[taskId].checkmark = 'completed'
        }
        res.send(toDoList[taskId]);
    }
    else {
        return res.status(404).send("ID not found")
    }
}
exports.deleteTask = (req,res) => {
    taskId = req.params.Id;
    if(toDoList[taskId]){
        res.send(toDoList[taskId]);
        delete toDoList[taskId];
    }
    else {
        return res.status(404).send("ID not found")
    }
}
