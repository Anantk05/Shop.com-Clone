


// for Select tag 

var accou=document.querySelector("#account")

accou.addEventListener("click",function(){
      window.location.href="Singinforhomepage.html"
})

document.querySelector("select").addEventListener("change",selectfunction)
function selectfunction(){
      event.preventDefault()
var result=document.querySelector("select").value
console.log(result)
      if(result=="Men"){
            window.location.href="menspage.html"
      }
      else if(result=="Women")
      {
            window.location.href="womenspage.html"
      }
      else{
            window.location.href="navbar.html"
      }
     
}


// for login page 

var logindatasave=JSON.parse(localStorage.getItem("logindata"))
if(logindatasave!==null){
      var user=document.querySelector(".log1")
      user.innerHTML=logindatasave.FirstName+`<a href="singinforhomepage.html"><img src="https://img.shop.com/Image/resources/images/icon-account-circle-24px.svg" alt=""></a>`;

      var cart=document.querySelector(".log2")
      cart.innerHTML="Cart"+`<a href="cartpage.html" target="_blank"><img  src="https://img.shop.com/Image/resources/images/icon-shopping-cart-24px.svg" alt=""></a>`
      
      //  document.querySelector(".log2").innerHTML=
}
