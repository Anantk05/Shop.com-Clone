var catchfav = JSON.parse(localStorage.getItem("favourites"))

displaymydata(catchfav)
function displaymydata(catchfav){
      catchfav.forEach(function(elm){
            var tr=document.createElement("tr")
            
            var td1=document.createElement("td")
            td1.innerText=elm.num

            var td2=document.createElement("td")
            td2.innerText=elm.teama

            var td3=document.createElement("td")
            td3.innerText=elm.teamb

            var td4=document.createElement("td")
            td4.innerText=elm.date

            var td5=document.createElement("td")
            td5.innerText=elm.venue

          var td6=document.createElement("td")
          td6.innerText="Delete"
          
          td6.style.color="red"
td6.setAttribute("class","deletefav")
          td6.addEventListener("click",deletefav)
   

            tr.append(td1,td2,td3,td4,td5,td6)
            document.querySelector("tbody").append(tr)
      })

    
      }
      function deletefav(){
            event.target.parentNode.remove();
      }
