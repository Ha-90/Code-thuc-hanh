// Vẽ giao diện table
    function drawTable(){
        let todoItem = JSON.parse(localStorage.getItem('todoItem'));
        let data = "";
        for(let i = 0; i < todoItem.length; i++){
            data += `
            <tbody id="listTodo">
            <td>${i+1}</td>
            <td>${todoItem[i].item}</td>
            <td>${todoItem[i].status}</td>
            <td col-span="3"><button id="edit" onclick="edit(${i})">EDIT</button>
            <button id="delete" onclick="del(${i})">DELETE</button>
            <button id="finished" onclick="finish(${i})">FINISHED</button></td>
                </tbody>
                `
            }
        document.getElementById("listTodo").innerHTML = data;
    }
    drawTable();
    
    // tạo mảng chứa list to do
    let btnSave = document.getElementById("btnSave");
    let input = document.getElementById("input");
        input.addEventListener('keypress', function(e){
        if (e.code == "Enter"){
            saveList();
        }
    });

    function saveList(){
        let input = document.getElementById("input");
        if (input.value == ""){
            return false;
        }
        let todoItem = JSON.parse(localStorage.getItem('todoItem'));
        
        if(todoItem == null) {
            let todoArr = [
                {
                    item: input.value,
                    status: "In Process",
                }
            ];
            // todoArr.push(input.value);
            localStorage.setItem('todoItem', JSON.stringify(todoArr));
        }
        else {
            let item = 
                {
                   item: input.value,
                   status: "In Process", 
                }
            
            todoItem.push(item);
            localStorage.setItem('todoItem', JSON.stringify(todoItem));
        }
        input.value = "";
    drawTable();
    }

// Tính năng xóa to do
    function del(i){
        let todoItem = JSON.parse(localStorage.getItem('todoItem'));     
            todoItem.splice(i, 1);
            localStorage.setItem('todoItem', JSON.stringify(todoItem));
        drawTable();
    }

// Tính năng báo finished
    function finish(i){
        let todoItem = JSON.parse(localStorage.getItem('todoItem')); 
        todoItem[i].status = "Finished!";
        localStorage.setItem('todoItem', JSON.stringify(todoItem));
        drawTable();
    }

// Tính năng edit 
    function edit(i){
        let todoItem = JSON.parse(localStorage.getItem('todoItem')); 
        todoItem[i].status = "In Process";
        localStorage.setItem('todoItem', JSON.stringify(todoItem));
        drawTable();
    }



