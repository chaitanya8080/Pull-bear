document.querySelector("#cancel").addEventListener("click", function(){
    document.querySelector("#searchBar").style.display = "none";
})
document.querySelector(".search").addEventListener("click", function(){
    document.querySelector("#searchBar").style.display = "block";
})


document.querySelector(".signin").addEventListener("click", function(){
    document.querySelector(".loginbox").style.display = "block";
})

document.querySelector(".createAccount-submit-btn").addEventListener("click", createAccount);
var userData = JSON.parse(localStorage.getItem("userDatabase")) || [];
function createAccount() {
    document.querySelector(".hellobox").style.display = "block";
    document.querySelector(".createaccountbox").style.display = "none";
var email = document.querySelector("#email").value;
var password = document.querySelector("#password").value;

var userCred = {
  emailAdd: email,
  pass: password,
  
};
userData.push(userCred);
localStorage.setItem("userDatabase", JSON.stringify(userData));
    
}

// register area

document.querySelector(".cancelbutton").addEventListener("click", function(){
    document.querySelector(".createaccountbox").style.display = "none";
})
document.querySelector(".register-submit-btn").addEventListener("click", function(){
    document.querySelector(".createaccountbox").style.display = "block";
    document.querySelector(".loginbox").style.display = "none";
})


document.querySelector(".createAccount-submit-btn").addEventListener("click", createAccount);
var userData = JSON.parse(localStorage.getItem("userDatabase")) || [];
function createAccount() {

var email = document.querySelector("#emailregd").value;
var password = document.querySelector("#passwordregd").value;
console.log(email,password)

var userCred = {
  emailAdd: email,
  pass: password,
  
};
userData.push(userCred);
localStorage.setItem("userDatabase", JSON.stringify(userData));
document.querySelector(".hellobox").style.display = "block"
}



document.querySelector(".cancelbutton").addEventListener("click", function(){
    document.querySelector(".hellobox").style.display = "none";
})
document.querySelector(".login-submit-btn").addEventListener("click", function(){
    document.querySelector(".hellobox").style.display = "block";
    document.querySelector(".loginbox").style.display = "none";
})

// logout

document.querySelector("#logout").addEventListener("click", function(){
    window.location.href = "manHomePage.html"
})

// login check details

document.querySelector(".login-submit-btn").addEventListener("click", login);
  var regdUsers = JSON.parse(localStorage.getItem("userDatabase"));
  function login() {
    var email = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;
    var flag = true;
    for (var i = 0; i <regdUsers.length; i++) {
      console.log(regdUsers[i].emailAdd, email)
      console.log(regdUsers[i].pass, password)
      if (regdUsers[i].emailAdd === email && regdUsers[i].pass === password) {
        flag = false;
        break;
      }
    }
    if(flag===true){
        alert("Wrong Email address or Password");
        window.location.href = "manHomePage.html"
        document.querySelector(".hellobox").style.display = "none";
    }
    else{
      alert("Login Successful");
      document.querySelector(".hellobox").style.display = "block";
    }
  }

  function openbox1(){
    document.querySelector(".box1").style.display = "block";
    document.querySelector(".box1").style.backgroundColor = "white";
    document.querySelector(".box1").style.transition = "0.5s";
    document.querySelector(".box1").style.width = "60%";
    document.querySelector(".box1").style.height = "100%";
    document.querySelector(".box1").style.cursor = "pointer";
  }


  window.addEventListener("scroll", function(){
    var scrolled = window.scrollY;

    if(scrolled>100){
      document.querySelector(".box1").style.display = "none";
      document.querySelector(".middle>div").style.display = "none";
      document.querySelector("#bar").style.display = "block";
    }
    else{
      document.querySelector(".box1").style.display = "block";
      document.querySelector(".box1").style.backgroundColor = "transparent";
      document.querySelector(".middle>div").style.display = "block";
      document.querySelector("#bar").style.display = "none";
    }
  })

document.querySelector(".bag").addEventListener("click", function(){
  window.location.href = "orderDelivery.html";
})

