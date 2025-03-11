const todo = { 
    list : {
	"create a new practice task": "In Progress", 
	"make a bed": "Done", 
	"write a post": "To Do", },
addTask(key ,number) { if (key.lenght > 50)
    {console.log("NumberMax");
} else (this.list.key === "")
{
    console.log("NoTask");
}
        this.list[key] = number;
},
changeStatus (key, number) {
    this.list[key]=number;
},
deleteTask(key) {
    delete this.list[key];
},
showList() {
    console.log(this.list)
}
 }
 

todo.changeStatus("write a post" , "Done");
todo.addTask("go play pc", "CS");
todo.deleteTask("make a bed");
todo.showList();    
