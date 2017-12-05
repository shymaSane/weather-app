getUser = (id, callback) =>{
  var user = {
      id,
      name: "shyma"
  }
  
  setTimeout(() => {
    callback(user)  
  }, 2100)
  
}

getUser(40, (userOb) => {
    console.log(userOb)
})