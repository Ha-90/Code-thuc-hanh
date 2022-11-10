function information() {
    let a = prompt("Họ và tên");
    let b = prompt("Ngày sinh");
    let c = prompt("Giới tính");
    let d = prompt("Văn hóa");
    let e = prompt("Học vấn");
    let f = prompt("Công việc 1");
    let g = prompt("Công việc 2");

    document.getElementById("hvt").innerHTML = a;
    document.getElementById("ns").innerHTML = b;
    document.getElementById("gt").innerHTML = c;
    document.getElementById("vh").innerHTML = d;
    document.getElementById("hv").innerHTML = e;
    document.getElementById("cv1").innerHTML = f;
    document.getElementById("cv2").innerHTML = g;
}
function reset() {
    document.getElementById("hvt").innerHTML = "";
    document.getElementById("ns").innerHTML = "";
    document.getElementById("gt").innerHTML = "";
    document.getElementById("vh").innerHTML = "";
    document.getElementById("hv").innerHTML = "";
    document.getElementById("cv1").innerHTML = "";
    document.getElementById("cv2").innerHTML = "";
}