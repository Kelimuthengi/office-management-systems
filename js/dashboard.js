firebase.auth().onAuthStateChanged((user) => {

    if(user) {

        // console.log(user.uid)
        // console.log(user.email)

    } else {
        
        window.location.href = "index.html";
    }

})