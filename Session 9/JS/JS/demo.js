document.write("đây là javascript")
document.getElementById("top").innerHTML="h1 đã bị thay đổi bởi js";

document.getElementsByClassName("hello")[1].innerHTML="class nay đã bị thay bởi js";
document.getElementsByClassName("hello")[3].innerHTML="class nay đã bị thay bởi js";

// alert("Trang web sẽ chuyển hướng...");
// prompt("Nhập nickname"); prompt( "Xác thực: 1+2=?");
// confirm("Trang web không an toàn, vẫn tiếp tục?")

function xuongdong() {
    document.getElementById("xuongdong").innerHTML="</br>";
}

function highlight() {
    document.getElementById("highlight").innerHTML="style"
}