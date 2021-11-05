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
               

               var id = doc.id
            //    console.log(id)
            document.getElementById("username").value = name
            document.getElementById("phone").value = phone

            } else {
                console.log("Oops! data not available")
            }


            // Save edited changes
            document.getElementById("update").onclick = function() {

                let name =  document.getElementById("username").value
                let phone =  document.getElementById("phone").value
                // edit changes
                 firebase.firestore().collection("users").doc(user.uid).update( {
                     username:name,
                     userPhone:phone
                 }).then(() => {
                     
                    window.location.href = "profile.html"
                 }).catch((error) => {
                     console.log(error)
                 })
             }


        })


    } else {
        
        window.location.href = "index.html";
    }

})