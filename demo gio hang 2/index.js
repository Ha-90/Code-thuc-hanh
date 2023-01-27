// let productData = [
//     {
//         image: "./1.png",
//         name: "iphone 14pm silver",
//         price: "40000000",
//         id: 1,
//     },
//     {
//         image: "./2.png",
//         name: "iphone 14pm gold",
//         price: "40000000",
//         id: 2,
//     },
//     {
//         image: "./3.png",
//         name: "iphone 14pm black",
//         price: "40000000",
//         id: 3,
//     },
//     {
//         image: "./4.png",
//         name: "iphone 14pm purple",
//         price: "40000000",
//         id: 4,
//     },
//     {
//         image: "./5.png",
//         name: "iphone 14pm white",
//         price: "40000000",
//         id: 5,
//     },
//     {
//         image: "./6.png",
//         name: "iphone 14pm rose gold",
//         price: "40000000",
//         id: 6,
//     }
// ]
// localStorage.setItem("productData", JSON.stringify(productData));

// vẽ giao diện page HTML
function drawListIphone () {
    let listIphone = JSON.parse(localStorage.getItem("productData"));
    let data = "";
    for (let i = 0; i < listIphone.length; i++) {
        data += `
            <div class="listIphone">
                <image src="${listIphone[i].image}" alt="">
                <p>${listIphone[i].name}</p>
                <p>${listIphone[i].price}</p>
                <div class="quantity">
                    <input type="number" value="1">
                    <i onclick="addIphoneToCart(${listIphone[i].id})" class="fa-solid fa-cart-shopping"></i>
                </div>
            </div>
            `
        document.getElementById("showIphone").innerHTML = data;
    }
}
drawListIphone();

// sự kiện click thêm sp
function addIphoneToCart(id) {
    let productData = JSON.parse(localStorage.getItem("productData"));
    let iphoneCart = localStorage.getItem("iphoneCart");

    if (iphoneCart == null) {
        iphoneCart = [];
        for (let i = 0; i < productData.length; i++) {
            if (productData[i].id == id) {
                iphoneCart.push(productData[i]);
                localStorage.setItem("iphoneCart", JSON.stringify(iphoneCart));
                break;
            }            
        }
    }
    else {
        let mobileCart = JSON.parse(localStorage.getItem("iphoneCart"));
        for (let i = 0; i < productData.length; i++) {
            flag = false;
            if (productData[i].id == id) {
                for (let j = 0; j < mobileCart.length; j++) {
                    if (mobileCart[j].id == id) {
                        flag = true;
                        break;
                    } else {
                        flag = false;
                    }                    
                }
                if (flag == true) {
                    console.log("sp da co trong gio hang");
                } else {
                    mobileCart.push(productData[i]);
                    localStorage.setItem("iphoneCart", JSON.stringify(mobileCart));
                }
            }
        }
    }
}