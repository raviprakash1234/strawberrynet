 
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



  //for model start
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




  //model is end