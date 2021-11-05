firebase.auth().onAuthStateChanged((user) => {

    if(user) {

        // console.log(user.uid)
        // console.log(user.email)
        // Get data from firebase
        firebase.firestore().collection("users").doc(user.uid).get()
        .then((doc) => {
            if(doc.exists) {

                let name = doc.data().username;
                // console.log(name)
                let phone = doc.data().userPhone;
                // console.log(phone);
                let email = doc.data().userEmail;

            
                // console.log(email);

               var id = doc.id
            //    console.log(id)
            document.getElementById("username").innerHTML = name
            document.getElementById("email").innerHTML = phone
            document.getElementById("phone").innerHTML = email


            } else {
                console.log("Oops! data not available")
            }
        })

        document.getElementById("logout").onclick = function() {
            document.getElementById("logout").style.display = "none"
            document.getElementById("loggingout").style.display = "block"
            firebase.auth().signOut().then( () => {
                window.location.href = "index.html"
            }).catch((error) => {
                console.log(error)
                document.getElementById("logout").style.display = "block"
                document.getElementById("loggingout").style.display = "none"
            })
        }

    } else {
        
        window.location.href = "index.html";
    }

})