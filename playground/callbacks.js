getUser = (id, callback) =>{
  var user = {
      id: id,
      name: "shyma"
  }
  callback(user)
}

getUser(40, (userOb) => {
    console.log(userOb)
})