let favorite = document.querySelectorAll("#favorite");
let favoriteArr = [];
let cart = document.querySelectorAll("#cart");
let carArr = [];
let count = 0;

for (let i = 0; i < favorite.length; i++) {
    favorite[i].addEventListener('click', function () {
        alert("Added your Favorite");

        console.log(this.parentNode.childNodes[0].src);
        console.log(this.parentNode.childNodes[2].innerText);
        console.log(this.parentNode.childNodes[4].innerText);
        
        favoriteArr.push({
            img: this.parentNode.childNodes[0].src,
            book: this.parentNode.childNodes[2].innerText,
            price: this.parentNode.childNodes[4].innerText
        });
        localStorage.setItem('favorite', JSON.stringify(favoriteArr));
        console.log(localStorage);
    })
}
for (let i = 0; i < cart.length; i++) {
    cart[i].addEventListener('click', function () {

        alert("Added your Cart");
        count = count + 1;
        document.getElementById("countCart").innerHTML = count;
        
        console.log(this.parentNode.childNodes[0].src);
        console.log(this.parentNode.childNodes[2].innerText);
        console.log(this.parentNode.childNodes[4].innerText);

        carArr.push({
            img: this.parentNode.childNodes[0].src,
            book: this.parentNode.childNodes[2].innerText,
            price: this.parentNode.childNodes[4].innerText
        });
        localStorage.setItem('cart', JSON.stringify(carArr));
        console.log(localStorage);
    })
}

