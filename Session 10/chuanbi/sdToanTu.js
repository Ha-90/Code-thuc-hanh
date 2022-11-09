// Viết một ứng dụng để tính diện tích của hình chữ nhật dựa vào chiều rộng và chiều
// cao được nhập vào. 
let inputWidth = prompt("Nhập chiều rộng");
let inputHeight = prompt("Nhập chiều dài");
inputWidth = parseInt(inputWidth);
inputHeight = parseInt(inputHeight);
let area = inputWidth*inputHeight;
document.write("Diện tích hình chữ nhật là: " + area);
