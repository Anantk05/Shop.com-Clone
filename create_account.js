document.querySelector("#form").addEventListener("submit",function(event){
    event.preventDefault()

    var data={
        FirstName:form.fname.value,
        LastName:form.lname.value,
        Email:form.FEmail.value,
        password:form.Fpass.value,
        conPass:form.lpass.value,
        MobileNum:form.mobiles.value,
        RefferEmail:form.Reffer.value,
          
    }
    
    if(data.password!=data.conPass){
        alert("the password confirmation does not match")
    }
    // else if(data.password>(Number(7))){
    //     alert("Char should be above 7")
    // }

    else {
        localStorage.setItem("signupdata",JSON.stringify(data))
        alert("Sucessfully Created")
    }
    

})