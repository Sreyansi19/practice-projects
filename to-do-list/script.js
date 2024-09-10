 
 const todos = [];

 function addTodo() {
     const task = document.getElementById('task').value;
     
     
     if (task) {
         const todo = { task};
         todos.push(todo);
         displayTodos();
         
         document.getElementById('task').value = '';
        
     } else {
         alert('Please fill in the required field.');
     }
 }

 
 function displayTodos() {
     const tableBody = document.getElementById('todoTableBody');
     tableBody.innerHTML = '';
     todos.forEach(todo => {
         const row = document.createElement('tr');
         row.innerHTML = `<td>${todo.task}</td>`;
         tableBody.appendChild(row);
     });
 }