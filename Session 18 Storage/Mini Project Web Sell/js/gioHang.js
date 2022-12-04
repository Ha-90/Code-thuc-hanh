
let cartArr = JSON.parse(localStorage.getItem("cart"));
console.log(cartArr);
function cartDraw() {
    let list = document.querySelector(".listCart");
    let data = '';

    for (let i = 0; i < cartArr.length; i++) {
        data += `<div class="bookdetail">
                        <img src="${cartArr[i].img}">
                    <div class="bookprice">
                        <p>${cartArr[i].book}</p>
                        <p>${cartArr[i].price}</p>
                    </div>
                </div>`
    }
    list.innerHTML = data;
}
