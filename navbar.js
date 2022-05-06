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