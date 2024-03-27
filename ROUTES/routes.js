const TodoController = require("/Decode Full stack Web Dev/TODO-LIST/CONTROLLERS/controller.js")
module.exports = (app) => {
    app.get("/todoList/api/v1/list", TodoController.getWholeList)

    app.post("/todoList/api/v1/create", TodoController.createTask)
    
    app.post("/todoList/api/v1/:Id/checkmark", TodoController.checkmark)
    
    app.post("/todoList/api/v1/:Id/edit", TodoController.editTask)

    app.get("/todoList/api/v1/:Id/delete", TodoController.deleteTask)


}