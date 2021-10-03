let cart_data = JSON.parse(localStorage.getItem("wish"));

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
});
let totalprice_json = JSON.stringify(total);
localStorage.setItem("total_price", totalprice_json);

function deleteFromCart(p) {
    // console.log(p);

    const cartData = JSON.parse(localStorage.getItem("wish"));

    const newData = deleteFn(cartData, p);

    localStorage.setItem("wish", JSON.stringify(newData));

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