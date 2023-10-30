function myFunction() {

    const userFirstName = document.getElementById("firstName").value
    const userLastName = document.getElementById("lastName").value
    
    const fullName = userFirstName+ " " + userLastName

    document.getElementById("fullName").value = fullName
    
    console.log(fullName)
  }