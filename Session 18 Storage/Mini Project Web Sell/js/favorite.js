function favoriteDraw() {
    let favoriteArr = JSON.parse(localStorage.getItem("favorite"));
    let list = document.querySelector(".listFavorite");
    let data = '';

    for (let i = 0; i < favoriteArr.length; i++) {
        data += `<div class="bookdetail">
                    <img src="${favoriteArr[i].img}">
                    <h2>${favoriteArr[i].book}</h2>
                    <div class="bookprice">
                        <p>${favoriteArr[i].price}</p>
                        <button class="remove_button">Bỏ yêu thích</button>  
                    </div>
                </div>`
    }
    list.innerHTML = data;
}

favoriteDraw();

function remove() {
    let remove_btn = document.querySelectorAll('.remove_button');
    for (let i = 0; i < remove_btn.length; i++) {
        remove_btn[i].addEventListener('click', function() {
            let favoriteArr = JSON.parse(localStorage.getItem("favorite"));
            favoriteArr.splice(i, 1);
            localStorage.setItem('favorite', JSON.stringify(favoriteArr));
            favoriteDraw();
            remove();  
        }) 
    }
}
remove();

function deleteAll() {
    localStorage.removeItem("favorite");
    window.location.href = "/Session 18 Storage/Mini Project Web Sell/page/favoriteBook.html";
}



