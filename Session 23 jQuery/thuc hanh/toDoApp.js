// Vẽ giao diện table
let todoItem = JSON.parse(localStorage.getItem("todoItem"));
if (todoItem == null) {
  todoItem = [];
}
// console.log(todoItem.length);
function drawTable(todoItem) {
  let data = "";
  for (let i = 0; i < todoItem.length; i++) {
    data += `
            <tbody id="listTodo">
            <td>${i + 1}</td>
            <td class="todo-item">${todoItem[i].item}</td>
            <td>${todoItem[i].status}</td>
            <td col-span="3"><button id="edit" onclick="edit(${
              todoItem[i].id
            })">EDIT</button>
            <button id="delete" onclick="del(${todoItem[i].id})">DELETE</button>
            <button id="finished" onclick="finish(${
              todoItem[i].id
            })">FINISHED</button></td>
            </tbody>
            `;
  }
  document.getElementById("listTodo").innerHTML = data;
}
drawTable(todoItem);

// tạo mảng chứa list to do
let btnSave = document.getElementById("btnSave");
let input = document.getElementById("input");
input.addEventListener("keypress", function (e) {
  if (e.code == "Enter") {
    saveList();
  }
});

function saveList() {
  let input = document.getElementById("input");
  let keyId = JSON.parse(localStorage.getItem("keyId"));
  if (keyId != null) {
    let todoItem = JSON.parse(localStorage.getItem("todoItem"));
    todoItem[keyId].item = input.value;
    todoItem[keyId].status = "In Process";
    todoItem.splice(keyId, 1, todoItem[keyId]);
    localStorage.setItem("todoItem", JSON.stringify(todoItem));
    document.getElementById("btnSave").innerHTML = "SAVE";
    input.value = "";
    drawTable(todoItem);
    localStorage.removeItem("keyId");
    return;
  }
  if (input.value == "") {
    alert("Vui lòng nhập dữ liệu");
    return false;
  }
  let todoItem = JSON.parse(localStorage.getItem("todoItem"));
  if (todoItem == null) {
    let todoArr = [
      {
        item: input.value,
        status: "In Process",
        id: 0,
      },
    ];
    localStorage.setItem("todoItem", JSON.stringify(todoArr));
  } else {
    let item = {
      item: input.value,
      status: "In Process",
      id: todoItem.length,
    };
    todoItem.push(item);
    localStorage.setItem("todoItem", JSON.stringify(todoItem));
  }
  input.value = "";
  //   console.log(todoItem);
  todoItem = JSON.parse(localStorage.getItem("todoItem"));
  drawTable(todoItem);
}

// Tính năng xóa to do
function del(id) {
  console.log(id);
  let todoItem = JSON.parse(localStorage.getItem("todoItem"));
  for (let i = 0; i < todoItem.length; i++) {
    if (todoItem[i].id == id) {
      todoItem.splice(i, 1);
    }
  }
  localStorage.setItem("todoItem", JSON.stringify(todoItem));
  drawTable(todoItem);
}

// Tính năng báo finished
function finish(id) {
  let todoItem = JSON.parse(localStorage.getItem("todoItem"));
  for (let i = 0; i < todoItem.length; i++) {
    if (todoItem[i].id == id) {
        todoItem[i].status = "Finished!";   
    }
    }
  localStorage.setItem("todoItem", JSON.stringify(todoItem));
  drawTable(todoItem);
}

// Tính năng edit
function edit(id) {
  let todoItem = JSON.parse(localStorage.getItem("todoItem"));
  let input = document.getElementById("input");
  for (let i = 0; i < todoItem.length; i++) {
    if (todoItem[i].id == id) {
        input.value = todoItem[i].item;     
    }
    }
  document.getElementById("btnSave").innerHTML = "EDIT";
  localStorage.setItem("keyId", JSON.stringify(id));
}

// Tính năng Search to do item
function search() {
  let todoItem = JSON.parse(localStorage.getItem("todoItem"));
  let searchValue = document.getElementById("searchValue");
  let searchValueArr = [];
  for (let i = 0; i < todoItem.length; i++) {
    if (todoItem[i].item.toUpperCase().includes(searchValue.value.toUpperCase())) {
      searchValueArr.push(todoItem[i]);
    }
  }
  drawTable(searchValueArr);
}
