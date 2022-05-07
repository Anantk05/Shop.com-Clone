var cartsavedata=JSON.parse(localStorage.getItem("cartsdata"))

displycart(cartsavedata)


function displycart(cartsavedata){
      cartsavedata.forEach(function(elm,index){
      var boxdiv=document.createElement("div")
       boxdiv.setAttribute("class","Probox")
       

     var leftbox=document.createElement("div")
     leftbox.setAttribute("class","proleft")
     boxdiv.append(leftbox)
     

     var rightbox=document.createElement("div")
      rightbox.setAttribute("class","proright")
      boxdiv.append(rightbox)
      document.querySelector("#proboundary").append(boxdiv)

            // leftbox data

     var proleftimg=document.createElement("img")
     proleftimg.setAttribute("class","leftimg")
     proleftimg.src=elm.imageurl
     leftbox.append(proleftimg)
     proleftimg.style.height="100%"
     proleftimg.style.width="100%"


//      rightbox data

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
     price_r.innerText="Prize :-$ "+elm.price
     rightbox.append(price_r)

     var del=document.createElement("button")
     del.setAttribute("class","delcart")
     del.innerText="Remove"
     rightbox.append(del)
     del.addEventListener("click",function(){
           deletecart(elm,index)
     })

      } )
           
}

function deletecart(elm,index){
      cartsavedata.splice(index,1);
      localStorage.setItem("cartsdata",JSON.stringify(cartsavedata))
      window.location.reload()
      // var updatedata=JSON.parse(localStorage.getItem("cartsdata"))
      // displycart(updatedata)
}

