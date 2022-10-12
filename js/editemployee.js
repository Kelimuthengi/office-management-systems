firebase.auth().onAuthStateChanged((user) => {
    // console.log(user.uid)

    if(user) {

        let queryString = decodeURIComponent(document.location.search);
        let docId = queryString.substring(1);
        // console.log(docId)

        // GET EMPLOYEE DATA
        firebase.firestore().collection("employees").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // console.log(doc.id, " => ", doc.data());
                let employeeId = doc.data().employeeId
                let employeedob = doc.data().dateOfBirth
                let portifolio = doc.data().portifolio
                let accountnum = doc.data().accnum
                let salary = doc.data().salary
                let nextOfKin = doc.data().nextofkinName
                let nextOfKinId = doc.data().nextofkinid
                let userDocId = doc.data().docId
                let profilePic = doc.data().

                if(docId == userDocId) {
                document.getElementById("employeeid").innerHTML = employeeId;
                document.getElementById("dob").innerHTML = employeedob;
                document.getElementById("portifolio").innerHTML = portifolio;
                document.getElementById("accountnum").innerHTML = accountnum;
                document.getElementById("salary").innerHTML = salary;
                document.getElementById("nextofkin").innerHTML = nextOfKin;
                document.getElementById("nextofkindid").innerHTML = nextOfKinId;
                document.getElementById("profilepicimg").src = 
                }
            });
            
            let editLink = "editanemployee.html" + "?" + docId
            // EDIT EMPLOYEE
            let content = ''
            content += '<a class="btn btn-success mx-3" href="'+editLink+'" >EDIT</a>';
            content += '<a href="addemployee.html" class="btn btn-dark">BACK</a>'
            // content 
             $('#btn-holder').append(content);
        });

    }

    else {
        window.location.href = "index.html"
    }
})