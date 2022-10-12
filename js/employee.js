firebase.auth().onAuthStateChanged((user) => {
    // console.log(user.uid);
    // console.log(user.email);
    if(user) {

        document.getElementById("submit").onclick = function() {
            
            let name = document.getElementById("name").value;
            let Id = document.getElementById("idNum").value;
            let dob = document.getElementById("birthDate").value;
            let phoneNum = document.getElementById("phone").value;
            let department = document.getElementById("department").value;
            let portifolio = document.getElementById("portifolio").value;
            let salary = document.getElementById("salary").value;
            let accnum = document.getElementById("accnum").value;
            let nextofkin = document.getElementById("nextofkin").value;
            let nextofkinid = document.getElementById("nextofkinid").value;
            let userId = user.uid

            // getting img
          // create a root refrence
            let storageRef = firebase.storage().ref();

                // getting img from html

            let img = document.getElementById("employeeimg").files[0];

                // create  reference to img

            let uploadTask = storageRef.child("employeesImage/").child(img.name).put(img);

                // uploading the image
                uploadTask.on('state_changed', (snapshot) => {

                    let progress = Math.floor((snapshot.bytesTransferred / snapshot.totalBytes) *100);

                    document.getElementById("imgprogress").innerHTML = progress + "%";
                    if(progress + "%" == "100%") {
                        document.getElementById("imgprogress").style.display = "none"
                    }
                },(error) => {

                    console.log(error)

                },() => {
                    uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                        // console.log("File available at" , downloadURL);

                        let docId = firebase.firestore().collection("employees").doc();
                        docId.set( {
            
                        employeeName:name,
                        employeeId: Id,
                        dateOfBirth:dob,
                        phoneNum:phoneNum,
                        department:department,
                        portifolio:portifolio,
                        userId:userId,
                        docId:docId.id,
                        salary:salary,
                        accnum:accnum,
                        nextofkinName:nextofkin,
                        nextofkinid:nextofkinid,
                        employeeImg:downloadURL
                    }).then(() => {
                        window.location.href = "addemployee.html";
                    }).catch((error) => {
                        console.log(error)
                    })
                    })
                }
                )
    }
    }

    else {
        window.location.href = "index.html"
    }
})