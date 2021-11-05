document.getElementById("signup").onclick = function() {
    document.getElementById("signup").style.display = "none"
    document.getElementById("signingup").style.display = "block"
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;


    // sign up the user
    firebase.auth().createUserWithEmailAndPassword(email, password).then((userCredential) => {
        // get users data
        var user = userCredential.user;

        firebase.firestore().collection("users").doc(user.uid).set( {
            username:name,
            userPhone:phone,
            userEmail:email
        }).then(()=> {
            window.location.href = "dashboard.html"
        }).catch((error) => {
            // console.log(error)
        })

    }).catch( (error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage)
        document.getElementById("signup").style.display = "block"
        document.getElementById("signingup").style.display = "none"
    })
    

    
}