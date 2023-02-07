//save in local storage
function saveToLocalStorage(event){
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    

    const obj = {
        name:name,
        email:email,
        phone:phone
    }
    axios.post("https://crudcrud.com/api/a3c4ab47d4ff47398a836bfaa362fe39/appdata",obj)
    .then((response) => {
        showUseronScreen(response.data)
        console.log(response)
    })
    .catch((err) => console.log(err))
 
    // showUseronScreen(obj)
}   
/// show user after refresh
window.addEventListener("DOMContentLoaded",() => {
    
    axios.get("https://crudcrud.com/api/a3c4ab47d4ff47398a836bfaa362fe39/appdata")
    .then((respnse) => {
        // console.log(respnse)
        for(var i = 0;i < respnse.data.length; i++){
            showUseronScreen(respnse.data[i])
        }
    })
    .catch((err) => console.log(err))


})


function showUseronScreen(user) {
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('phone').value = "";


    const parentNode = document.getElementById('userlist')
    const childHTML = `<li id=${user._id}>${user.name} - ${user.email} - ${user.phone}
    <button onclick=deleteuser('${user._id}')> Delete </button>
    <button onclick=editUserDetails('${user.name}','${user.email}','${user.phone}','${user._id}')>Edit </button>
 </li>`
    parentNode.innerHTML = parentNode.innerHTML + childHTML;
}

function deleteuser(userId) {
    
    axios.delete(`https://crudcrud.com/api/a3c4ab47d4ff47398a836bfaa362fe39/appdata/${userId}`)
    .then((response) => {
        
        removeitemFromScreen(userId)

    }).catch((err) => console.log(err))
}

function removeitemFromScreen(userId) {
    const parentNode=document.getElementById('userlist');
    const childNodeToBeDeleted = document.getElementById(userId);
    if (childNodeToBeDeleted){
      parentNode.removeChild(childNodeToBeDeleted)
    }
}


function editUserDetails(name,email,phone,userId){
    document.getElementById('name').value = name;
    document.getElementById('email').value = email;
    document.getElementById('phone').value = phone;
    deleteuser(userId)
}
// //save in local storage
// function saveToLocalStorage(event){
//     event.preventDefault();
//     const name = event.target.name.value;
//     const email = event.target.email.value;
//     const phone = event.target.phone.value;
    

//     const obj = {
//         name,
//         email,
//         phone
//     }

//     localStorage.setItem(obj.name,JSON.stringify(obj))
//     showUseronScreen(obj)
// }   
// /// show user after refresh
// window.addEventListener("DOMContentLoaded",() => {
//     const locatStorageobj = localStorage;
//     const locatStoragekeys = Object.keys(locatStorageobj);

//     for(var i=0;locatStoragekeys.length;i++){
//         const key = locatStoragekeys[i];
//         const details = locatStorageobj[key]
//         const detailobject = JSON.parse(details);
//         showUseronScreen(detailobject)
//     }
// })


// function showUseronScreen(user) {
//     document.getElementById('name').value = "";
//     document.getElementById('email').value = "";
//     document.getElementById('phone').value = "";


//     const parentNode = document.getElementById('userlist')
//     const childHTML = `<li id=${user.name}>${user.name} - ${user.email} - ${user.phone}
//     <button onclick=deleteuser('${user.name}')> Delete </button>
//     <button onclick=editUserDetails('${user.name}','${user.email}','${user.phone}')>Edit </button>
//  </li>`
//     parentNode.innerHTML = parentNode.innerHTML + childHTML;
// }



// function deleteuser(name) {
//     localStorage.removeItem(name)
//     removeitemFromScreen(name)
// }
// function removeitemFromScreen(name){
//     const parentNode = document.getElementById("userlist");
//     const childnodetobeDeleted = document.getElementById(name);
//     if(childnodetobeDeleted){
//         parentNode.removeChild(childnodetobeDeleted)
//     }
// }

// function editUserDetails(name,email,phone){
//     document.getElementById('name').value = name;
//     document.getElementById('email').value = email;
//     document.getElementById('phone').value = phone;
//     deleteuser(name)
// }