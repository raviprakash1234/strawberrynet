function addToBag(product) {
    const cart_data = product;
    console.log('cart_data:', cart_data)
}


// let cart_data = JSON.parse(localStorage.getItem("items"));

let products_div = document.getElementById("products");

var total = 0;

cart_data.forEach(function (p) {
    let div = document.createElement("div");

    let p_name = document.createElement("p");
    p_name.innerHTML = p.name;

    let p_description = document.createElement("p");
    p_description.innerHTML = p.description;

    let p_price = document.createElement("p");
    p_price.innerHTML = "Rs." + p.price;

    let p_image = document.createElement("img");
    p_image.src = p.image;

    let remove_item = document.createElement("button");
    remove_item.textContent = "Delete";
    remove_item.onclick = function () {
        deleteFromCart(p);
    };

    div.append(p_image, p_name, p_description, p_price, remove_item);

    products_div.append(div);

    total = parseFloat(total) + parseFloat(p.price.replace(/,/g, ""));
});
let totalprice_json = JSON.stringify(total);
localStorage.setItem("total_price", totalprice_json);

function deleteFromCart(p) {

    const cartData = JSON.parse(localStorage.getItem("items"));

    const newData = deleteFn(cartData, p);

    localStorage.setItem("items", JSON.stringify(newData));

    window.location.reload();
}
function deleteFn(cartData, p) {
    for (let i = 0; i < cartData.length; i++) {
        // item to delete
        const productName = p.name;

        if (cartData[i].name == productName) {
            cartData.splice(i, 1);
        }
    }

    return cartData;
}

let total_p = document.getElementById("total");
total_p.innerHTML = `Rs ${total}`;

let standard_p = document.getElementById("signature");
standard_p.innerHTML = `Rs ${0}`;

let surcharge_p = document.getElementById("surcharge");
surcharge_p.innerHTML = `Rs ${0}`;

let order_total = document.getElementById("order_total");
order_total.innerHTML = `Rs ${total + 0 + 0}`;

// let username_data = JSON.parse(localStorage.getItem("users"));
// console.log(username_data.take_first);

// let username1 = document.getElementById("username1");
// username1.innerHTML = username_data.take_first + "?";
