document.querySelector("#return").addEventListener("click", function(){
    window.location.href = "paymentMode.html";
});

document.querySelector("#checkbox").addEventListener("click", function(){
    window.location.href = "paymentMode.html";
})

document.querySelector("#heading").addEventListener("click", function(){
    window.location.href = "manHomePage.html";
});

document.querySelector("#confirm").addEventListener("click", function(){
    var person = prompt("Please enter your OTP", "");
if(person == "1234"){
    alert("Payment Successful !\nThank you for shopping");
    window.location.href = "manHomePage.html";
}
else{
    alert("Wrong OTP, Try Again");
}  
});

document.querySelector("#contact").addEventListener("click", function(){
    window.location.href = "contact.html";
});

document.querySelector("#back").addEventListener("click", function(){
    window.location.href = "paymentMode.html";
});

var arr = JSON.parse(localStorage.getItem("cart"))||[];
var totalAmount =  0;
arr.map(function(el){
    // // image input
    var image = document.createElement("img");
    image.setAttribute("src", el.image);
    image.style.width = "100%";
    image.style.height = "100%";
    var div = document.createElement("div");
    var div1 = document.createElement("div");
    div1.append(image);
    var div2 = document.createElement("div");
    div.append(div1, div2);
    document.querySelector("#productInfo").append(div);
    div1.style.width = "25%";
    div2.style.width = "70%";
    div.style.display = "flex";
    div1.style.padding = "5px";
    div2.style.marginLeft = "10px";
    div.style.marginBottom = "20px";
    

    var div21 = document.createElement("div");
    var h4 = document.createElement("h4")
    h4.textContent = el.name;
    div21.append(h4);
    div2.append(div21);
    var div22 = document.createElement("div");
    var p = document.createElement("p")
    p.textContent = "Product Code"+" "+"4200/910";
    div21.append(p);
    div2.append(div21);
    var div23 = document.createElement("div");
    div23.style.display = "flex";

    var div232 = document.createElement("div");
    div232.style.width = "50%";
    div232.style.height = "20px";
    div232.style.border = "1px solid black";
    div232.style.marginRight = "10px"
    div232.textContent = el.size;
    div232.style.textAlign = "center";
    var div233 = document.createElement("div");
    div233.style.width = "50%";
    div233.style.height = "20px";
    div233.style.border = "1px solid black";
    div233.style.marginRight = "10px"
    div233.textContent = "1";
    div233.style.textAlign = "center";
    div23.append(div232, div233);
    div2.append(div23);
    var div24 = document.createElement("div");
    div24.textContent = el.price + " "+ "€";
    div24.style.fontWeight = "bold";
    div24.style.textAlign = "right";
    div24.style.margin = "7px"
    div2.append(div24);
    totalAmount = Number(totalAmount) + Number(el.price);
    localStorage.setItem("amount", totalAmount);
    console.log(totalAmount);

})



totalAmount = Math.ceil(totalAmount);
document.querySelector("#totalPrice").textContent = totalAmount +" "+"€";


document.querySelector("#apply").addEventListener("click", function(){
    var promo = document.querySelector("#promo").value;
    if(promo == "masai30"){
                totalAmount = 0.7*totalAmount;
    }
    totalAmount = Math.ceil(totalAmount);
document.querySelector("#totalPrice").textContent = totalAmount +" "+"€";
})