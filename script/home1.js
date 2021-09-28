var data = [
  {
    name: "Academie",
    price: "3,035.50",
    image: "https://a.cdnsbn.com/images/products/250/26113321339.jpg",
    description: "Phyto-Peeling With Seaweed (Salon Size) 200ml/6.75oz",
  },

  {
    name: "Bioelements",
    price: "2,152.00",
    image: "https://a.cdnsbn.com/images/products/250/16991730439.jpg",
    description: "His Perfect Shave 118ml/4oz",
  },

  {
    name: "Guerlain",
    price: "5,148.50",
    image: "https://a.cdnsbn.com/images/products/250/21914280737.jpg",
    description: "La Patite Robe Noire Eau Fraiche Eau De Toilette Spray 100ml/3.3oz",
  },

  {
    name: "Hermes",
    price: "7,300.00",
    image: "https://a.cdnsbn.com/images/products/250/15579440137.jpg",
    description: "La Patite Robe Noire Eau Fraiche Eau De Toilette Spray 100ml/3.3oz",
  }
];


data.forEach((item) => {

  const itemData = item;

  const html = `<div>
          <a onclick="wishlist('${item.name}', '${item.image}', '${item.price}', '${item.description}')"href="#">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#623381"
              class="bi bi-heart"
              viewBox="0 0 16 16">
              <path
                d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
              />
            </svg>
          </a>
          <a href= "p2.html">
          <img
            src=${item.image}
            alt="item-image">
          </a>
          
          <div class="s_item_data">
            <h4>${item.name}</h4>
            <p>${item.description}</p>
          </div>
          <div class="price-cont">
            <p class="special-offer">SAVE 60%</p>
            <h2> RS. ${item.price} </h2>
            <p>RRP Rs.7,607.50</p>
          </div>
          <div class="s_btn">
            <button onclick="addToCart('${item.name}', '${item.image}', '${item.price}', '${item.description}')">Add to bag</button>
            <h5>Extra 10% Off</h5>
          </div>
        </div>`;

  const specialItem = document.getElementsByClassName('special-item')[0];
  specialItem.insertAdjacentHTML('beforeend', html);

})

function addToCart(name, image, price, description) {

  const itemData = { name, image, price, description };

  // fetch local storage data 
  let cartData = localStorage.getItem("items");

  if (cartData) {
    cartData = JSON.parse(cartData);
  } else {
    cartData = [];
  }



  // push the itemData object in parsedData
  cartData.push(itemData);


  const itemData_json = JSON.stringify(cartData);
  localStorage.setItem("items", itemData_json)
  // console.log(itemData)
}


const data_json = JSON.stringify(data);
localStorage.setItem("data", data_json);

function wishlist(name, image, price, description) {



  const wishlist_item = { name, image, price, description };

  // fetch local storage data 
  let wishlistData = localStorage.getItem("wish");

  if (wishlistData) {
    wishlistData = JSON.parse(wishlistData);
  } else {
    wishlistData = [];
  }



  // push the itemData object in parsedData
  wishlistData.push(wishlist_item);


  const wishlistData_json = JSON.stringify(wishlistData);
  localStorage.setItem("wish", wishlistData_json)
}

//...............................................................//
  var counter = 1;
  setInterval(function () {
    document.getElementById("radio" + counter).checked = true;
    counter++;
    if (counter > 13) {
      counter = 1;
    }
  }, 4000);
  // Get the modal
  var modal = document.getElementById("myModal");
  var register = document.getElementById("register");
  var login = document.getElementById("login");

  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal
  btn.onclick = function () {
    modal.style.display = "block";
  };

  // When the user clicks on <span> (x), close the modal
  function closeModal() {
    modal.style.display = "none";
  }

  span.onclick = function () {
    closeModal();
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
  var signup = document.getElementById("sign");
  var newhere = document.getElementById("new");

  function signIn() {
    // console.log("signup")
    register.style.display = "none";
    login.style.display = "";
  }
  function signUp() {
    // console.log("newhere")
    login.style.display = "none";
    register.style.display = "";
  }

  save_value.onclick = function (e) {
    // console.log("res")
    let user = {
      take_first: document.getElementById("take_first").value,
      take_last: document.getElementById("take_last").value,
      take_email: document.getElementById("take_email").value,
      take_password: document.getElementById("take_password").value,
      take_password1: document.getElementById("take_password1").value,
    };
    localStorage.setItem("users", JSON.stringify(user));
    // console.log(localStorage.getItem("users"))
    e.preventDefault();
  };

  // console.log(data.take_email)

  logIn.onclick = function () {
    var data = JSON.parse(localStorage.getItem("users"));

    var sign = document.getElementById("email").value;
    var pwd = document.getElementById("pwd").value;

    // console.log(data.take_first);
    // console.log(data.take_email, sign);

    // console.log(data.take_password, pwd);
    var flag = false;
    if (sign == data?.take_email && pwd == data?.take_password) {
      flag = true;
      // console.log(username);
      closeModal();
    } else {
      // console.log("no")
      alert("Email or Password wrong");
    }
    if (flag) {
      let username = document.getElementById("myBtn");
      username.innerHTML = data?.take_first;
    }
  };
  function cart() {
    console.log("yes");
  }