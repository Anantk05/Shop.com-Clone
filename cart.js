var cartsavedata=JSON.parse(localStorage.getItem("cartsdata"))

displycart(cartsavedata)



function displycart(cartsavedata){
      var total=0
     total.toFixed(2)
      cartsavedata.forEach(function(elm,index){

            // This is For the outer boxex

      var boxdiv=document.createElement("div")
       boxdiv.setAttribute("class","Probox")
       

     var leftbox=document.createElement("div")
     leftbox.setAttribute("class","proleft")
     boxdiv.append(leftbox)
     

     var rightbox=document.createElement("div")
      rightbox.setAttribute("class","proright")
      boxdiv.append(rightbox)
      document.querySelector("#proboundary").append(boxdiv)


            // Inner leftbox data

     var proleftimg=document.createElement("img")
     proleftimg.setAttribute("class","leftimg")
     proleftimg.src=elm.imageurl
     leftbox.append(proleftimg)
     proleftimg.style.height="100%"
     proleftimg.style.width="100%"


//   Inner rightbox data

     var name_r=document.createElement("p")
     name_r.setAttribute("class","rnameseller")
     name_r.innerText="Product Name :-"+ elm.name
     rightbox.append(name_r)

     var cashback_r=document.createElement("p")
     cashback_r.setAttribute("class","rcashback")
     cashback_r.innerText="Cashback :-"+ elm.cashback
     rightbox.append(cashback_r)

     var seller_r=document.createElement("p")
     seller_r.setAttribute("class","rnameseller")
     seller_r.innerText="Seller :- "+ elm.seller
     rightbox.append(seller_r)

     var offprize_r=document.createElement("p")
     offprize_r.setAttribute("class","offr")
     offprize_r.innerText= "Prize OFF :- "+ elm.offprice
     rightbox.append(offprize_r)

     var price_r=document.createElement("h3")
     price_r.setAttribute("class","pricer")
     price_r.innerText= "Prize :- $"+ elm.price
     total=total+Number(elm.price)
   
     
     rightbox.append(price_r)
     

     var del=document.createElement("button")
     del.setAttribute("class","delcart")
     del.innerText="Remove"
     rightbox.append(del)
   
     del.addEventListener("click",function(){
      deletecart(elm,index)   
})
      } )

    var showp=document.querySelector("#showtotal")
    showp.innerText="$"+total
    if(total>=20)
    {
          var Applicable=document.querySelector("#massage")
          var Applicable1=document.querySelector("#cong")
          Applicable1.innerText="Congratulations! "
          Applicable1.style.color="green"
          Applicable1.style.margin="-10px"
          Applicable.innerText="Your order qualifies for free Delivery"
          Applicable.style.color="green"
    }
    else if(total==0)
    {
      var not= document.querySelector("#cong")
      var add1= document.querySelector("#massage")
      add1.innerText="Add Items in cart - Click on Continue Shoping"
      add1.style.color="green"
      add1.style.width="80%"
      add1.style.margin="auto"
      not.innerText="Your Cart is Empty"
    
      not.style.color="darkblue"
    }
  else if(total<20)
  {
          var show=20-total
     var notapp= document.querySelector("#massage")
      notapp.innerText="Add More Items Worth $"+ show+" For free Delivery OR"
      notapp.style.color=" darkred"
      notapp.style.width="80%"
      notapp.style.margin="auto"
    }





    localStorage.setItem("paydata",(total))
}

    
   


function deletecart(elm,index){
      cartsavedata.splice(index,1);
      localStorage.setItem("cartsdata",JSON.stringify(cartsavedata))
      window.location.reload()
      // var updatedata=JSON.parse(localStorage.getItem("cartsdata"))
      // displycart(updatedata)
}


