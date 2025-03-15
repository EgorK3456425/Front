const todo = { 
    list : {
	"create a new practice task": "In Progress", 
	"make a bed": "Done", 
	"write a post": "To Do", },
addTask(key ,number) 
{
    if (key.length > 50) {
        console.log(`${key.length},Слишком большое назание задачи`);
        return; 
};
    if (this.list[key]) {
        console.log(`${key}, Задача уже есть`);
        return;
    }
       
    

        this.list[key] = number;
},
changeStatus (key, number) {
    if (!this.list[key]) {
        console.log(`${key}, Задачи нету`);
        return;
    }
    
    
        this.list[key]=number;

},
deleteTask(key) {

    if (!this.list[key]) {
        console.log(`${key}, Задачи нет`);
        return;
    
}
    delete this.list[key];
},
showList() {
    console.log(this.list)
},
}
 

todo.changeStatus("write a post" , "Done");
todo.addTask("Go", "CS");
todo.deleteTask("make a bed");
todo.showList();    
