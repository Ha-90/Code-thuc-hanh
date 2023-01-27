`<div class="table">
    <table>
        <tr>
            <th>sp</th>
            <th>ten</th>
            <th>gia</th>
            <th>sl</th>
            <th>tien</th>
            <th>xoa</th>

</div>`






// vẽ lại sp đã thêm vào giỏ (lấy từ storage)
function cartDraw() {
    let cartArr = JSON.parse(localStorage.getItem("cart"));
    let list = document.querySelector(".listCart");
    let data = '';

    for (let i = 0; i < cartArr.length; i++) {
        data += `<div class="bookdetail">
                        <img src="${cartArr[i].img}">
                        <h2>${cartArr[i].book}</h2>
                    <div class="bookprice">
                        <p>${cartArr[i].price}</p>
                        <button class="remove_button">Xóa khỏi giỏ</button>  
                    </div>
                </div>`
    }
    list.innerHTML = data;
}

cartDraw();
// xóa 1 sp trong giỏ (xóa xong ghi lại vào storage)
function remove() {
    let remove_btn = document.querySelectorAll('.remove_button');
    for (let i = 0; i < remove_btn.length; i++) {
        remove_btn[i].addEventListener('click', function() {
            let cartArr = JSON.parse(localStorage.getItem("cart"));
            cartArr.splice(i, 1);
            localStorage.setItem('cart', JSON.stringify(cartArr));
            cartDraw();
            remove();  
        }) 
    }
}
remove();

 function deleteAll() {
    localStorage.removeItem("cart");
    window.location.href = "/Session 18 Storage/Mini Project Web Sell/page/gioHang.html";
}

