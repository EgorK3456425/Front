
const phoneBook =  {
      "John": 123456789,
      "Jane Doe": 987654321,
      "Jim Smith": 111111111,
     
      addTask(key ,number) {
         this[key] = number;
      },

changeStatus (key, number) {
  this[key]=number;
}
    };
 
     function showList() {
        console.log(phoneBook)
      }
     
   
phoneBook.addTask("Egor", 333);
phoneBook.changeStatus("John" , 999999);
showList();