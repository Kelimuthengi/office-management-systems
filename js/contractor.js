firebase.auth().onAuthStateChanged((user) => {
    // console.log(user.uid)

    if(user) {
        document.getElementById("submit").onclick = function () {
            var name = document.getElementById("name").value;
            var company = document.getElementById("company").value;
            var service = document.getElementById("service").value;
            var number = document.getElementById("phone").value;
            var email = document.getElementById("email").value;

           let docId = firebase.firestore().collection("contractors").doc()
           docId.set( {
                contractorname:name,
                companyName:company,
                serivces:service,
                phoneNumber:number,
                userEmail:email,
                docId:docId.id,
                userId:user.uid
            }).then(() => {
                window.location.href = "addcontractors.html";
                // window.location.href = "contractor.html";
            }).catch((error) => {
                console.log(error)
            })
        }
    }

    else {
        window.location.href = "index.html"
    }
    
})