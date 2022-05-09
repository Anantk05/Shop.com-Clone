var Userdata=JSON.parse(localStorage.getItem("signupdata"))
// console.log(Userdata);

var button=document.querySelector("button").addEventListener("click",myfun)

function myfun(){
    window.location.href="create_account.html"
}

document.querySelector("#signform").addEventListener("submit",function(event){
    event.preventDefault();

    var collect={
        Mail:signform.Mymail.value,
        Password:signform.myPass.value,
    }
    // console.log(collect)

    if(collect.Mail==Userdata.Email && collect.Password == Userdata.password){
        localStorage.setItem("logindata",JSON.stringify(Userdata))
        alert("signin Successfully")
        window.location.href="homepage.html"
    }
    else if(collect.Mail==Userdata.Email){
        alert("wrong password")
    }
    else if(collect.Password == Userdata.password){
        alert("wrong Mail")
    }
    else{
        alert("Create account")
    }

})

