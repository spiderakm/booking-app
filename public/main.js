const li=document.querySelector(".ul")
const btn=document.querySelector("#button")
const name=document.querySelector("#name1")
const email=document.querySelector("#email")
let phone=document.querySelector("#phone")

//fetching the data using get service
window.addEventListener("DOMContentLoaded",async()=>{
   try{
  const response=await axios.get("http://localhost:4000/show-details")
      console.log(response.data.alluser.length)
      for(let i=0;i<response.data.alluser.length;i++){
          showBrowser(response.data.alluser[i])
      }
   } 
   catch(err){
     console.log({Error:err})
      console.log("error dom get method")
   }
})
   

function showBrowser(show){
   const parentNode=document.querySelector(".ul")
        var childNode=`<li id=${show.id} style="margin-bottom:10px;">${show.name}-${show.email} - ${show.phone}
             <button onclick="deleteProduct('${show.id}')" style="float:right; margin-left:5px;">Delete</button>  
             <button onclick=editProduct('${show.id}','${show.phone}','${show.name}','${show.email}') style="float:right;">Edit</button>
                     </li>`
                     parentNode.innerHTML=parentNode.innerHTML+childNode;     
}

//Deleting the created appointment in screen and  from the server
function deleteProduct(key){
    axios.delete(`http://localhost:4000/delete-details/${key}`)
    .then((resource)=>{
      console.log("entered delete dom")
     removeScreen(key)
    }).catch(()=>{
      console.log("error in delete dom")
    })
    function removeScreen(key){
      parent=document.querySelector(".ul")
      child=document.getElementById(key)
      if(child){
         parent.removeChild(child)
      }
   }
   }   


btn.addEventListener("click",(e)=>{
    e.preventDefault();

   //storing a values in object
   const my_obj={
    name:name.value,
    email:email.value,
    phone:phone.value
   }

   //Storing the data on cloud storage
   axios.post("http://localhost:4000/add-details",my_obj)
   .then((response)=>{
      
      console.log("post-->",response.data.newuser)
      console.log(response)
      showBrowser(response.data.newuser)
   })
   .catch((err)=>{
      console.log(err)
         })
  //Making the input box empty
   name.value=""
   email.value=""
   phone.value=""
 
})


