firebase.auth().onAuthStateChanged((user) => {

    if(user) {

        console.log(user.uid)
        // console.log(user.email)
        // Get data from firebase
        firebase.firestore().collection("users").doc(user.uid).get()
        .then((doc) => {
            if(doc.exists) {

                let name = doc.data().username;
                // console.log(name)
                let phone = doc.data().userPhone;
                // console.log(phone);
               let profiePic = doc.data().profiePic

               var id = doc.id
            //    console.log(id)
            document.getElementById("username").value = name
            document.getElementById("phone").value = phone
            document.getElementById("profilepicimg").src = profiePic

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

        // UPLOAD AN IMAGE
        document.getElementById("uploadbtn").onclick = function() {

            // Create a root reference
            var storageRef  = firebase.storage().ref();

            // getting ctual file from html
            var file = document.getElementById("uploadphoto").files[0];

            // create a ref to our fie
            var uploadTask = storageRef.child("profile/").child(file.name).put(file);


            // uploading the file
            uploadTask.on('state_changed', (snapshot) => {

                var progress = Math.floor((snapshot.bytesTransferred / snapshot.totalBytes)) * 100;

                document.getElementById("uploadprogress").innerHTML = progress + "%"
                if(progress + "%" == "100%" ) {
                    document.getElementById("uploadprogress").style.display = "none"
                }
            },(error) => {

                // handling error
                console.log(error)
                console.log("Your upload is unsuccesful please try again")
            },() => {

                uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                     console.log('File available at', downloadURL);

                    firebase.firestore().collection("users").doc(user.uid).update({
                        profiePic:downloadURL
                    })
                  });
            });
        }


    } else {
        
        window.location.href = "index.html";
    }

})