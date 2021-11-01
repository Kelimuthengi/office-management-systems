document.getElementById("signup").onclick = function() {
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;


    // sign up the user
    firebase.auth().createUserWithEmailAndPassword(email, password).then((userCredential) => {

        var user = userCredential.user;
        window.location.href = "dashboard.html"

    }).catch( (error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage)
    })
    

    
}