export class Todolist{

    todoList = ["Ayah", "Mamah", "Adek"];

    getJsonTodo() {
        return JSON.stringify({
            code: 200,
            status: "OK",
            data: this.todoList.map((value,index) => {
                return {
                    id: index,
                    todo: value
                }
            })
        })
    }

    getTodo(req, res){
        res.write(this.getJsonTodo());
        res.end();
    }
    
    createTodo(req, res) {
        req.addListener("data",(data) => {
            const body = JSON.parse(data.toString());
            this.todoList.push(body.todo);
            
            res.write(this.getJsonTodo());
            res.end();
        })
    }

    updateTodo(req, res) {
        req.addListener("data",(data) => {
            const body = JSON.parse(data.toString());
            if (this.todoList[body.id]) {
                this.todoList[body.id] = body.todo;
            }

            res.write(this.getJsonTodo());
            res.end();
        })
    }

    deleteTodo(req, res) {
        req.addListener("data",(data) => {
            const body = JSON.parse(data.toString());
            if (this.todoList[body.id]) {
                this.todoList.splice(body.id, 1);
            }

            res.write(this.getJsonTodo());
            res.end();
        })
    }

}