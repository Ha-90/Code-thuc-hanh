let favoriteArr = JSON.parse(localStorage.getItem("favorite"));
console.log(favoriteArr);
function favoriteDraw() {
    let list = document.querySelector(".listFavorite");
    let data = '';

    for (let i = 0; i < favoriteArr.length; i++) {
        data += `<div class="bookdetail">
                        <img src="${favoriteArr[i].img}">
                    <div class="bookprice">
                        <p>${favoriteArr[i].book}</p>
                        <p>${favoriteArr[i].price}</p>
                    </div>
                </div>`
    }
    list.innerHTML = data;
    }


