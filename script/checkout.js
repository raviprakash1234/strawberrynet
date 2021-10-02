let cart_data = JSON.parse(localStorage.getItem("items"));

let products_div = document.getElementById("products");

var total = 0;

cart_data.forEach(function (p) {
    let div = document.createElement("div");

    let p_name = document.createElement("p");
    p_name.innerHTML = p.name;

    let p_description = document.createElement("p");
    p_description.innerHTML = p.description;

    let p_price = document.createElement("p");
    p_price.innerHTML = p.price;

    let p_image = document.createElement("img");
    p_image.src = p.image;



    div.append(p_image, p_name, p_description, p_price);

    products_div.append(div);

    // console.log(typeof p.price);
    // var rate = +p.price;
    // console.log(typeof rate);
});
var total_price = JSON.parse(localStorage.getItem("total_price"));

var total_price1 = document.getElementById("total_price1");
total_price1.innerHTML = "Rs. " + total_price;

var btn_promo = document.getElementById("promo");
btn_promo.addEventListener("click", applycode);

applycode();

function applycode() {
    var total_amount = total_price;

    var afterpromo = Math.floor(total_amount - (total_amount * 3) / 100);

    let promoInput = document.getElementById("text").value;

    checker(total_amount, afterpromo, promoInput);

    function checker(total_amount, afterpromo, promoInput) {
        if (promoInput == "masai30") {
            document.getElementById("itemTotal").innerText = afterpromo;
            document.getElementById("apply").innerText = "Congratulation!"
            document.getElementById("final_amount").innerText = afterpromo

        }
        else {
            document.getElementById("itemTotal").innerText = total_amount;
            document.getElementById("final_amount").innerText = total_amount

        }
    }
}


var pay_btn = document.getElementById("payment_btn")
pay_btn.addEventListener("click", pay)

function pay() {
    var cardNo = document.getElementById("card_number").value;
    var cardE = document.getElementById("card_expiry").value;
    var cvc = document.getElementById("card_cvc").value;
    if (cardNo.length == 16 && cardE.length == 4 && cvc.length == 3) {
        //  console.log("yes")
        alert("payment Successful");
        setTimeout(function () {

            window.location.href = "thanks.html";
        }, 1000);
    } else {
        alert("your card is details wrong")
    }
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
}
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}