var image = [
    "./img Shopee/1.png",
    "./img Shopee/2.jpg",
    "./img Shopee/3.jpg",
    "./img Shopee/4.png",
    "./img Shopee/5.jpg"
];
console.log(image);
var num = 0;
var slider = document.getElementById("slider");

function next(){
    num++;
    if(num >= image.length){
        num = 0;
    } else {
        slider.src = image[num];
        console.log(image[2]);
    }
}
function prev(){
    num--;
    if (num < 0) {
        num = image.length;
    } else {
        slider.src = image[num];
    }
}
setInterval(next, 5000);
