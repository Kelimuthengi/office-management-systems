firebase.auth().onAuthStateChanged((user) => {
    // console.log(user.uid)

    if(user) {
        // GET DATA FROM CONTRACTORS PAGE

        let queryString = decodeURIComponent(window.location.search);
        let docId = queryString.substring(1);

        firebase.firestore().collection("contractors").doc(docId).get()
        .then((doc) => {
            let companyname = doc.data().companyName;
            let contractorName = doc.data().contractorname;
            let phoneNumber = doc.data().phoneNumber;
            let serivces = doc.data().serivces;

            document.getElementById("name").value = companyname
            document.getElementById("company").value = contractorName
            document.getElementById("service").value = serivces
            document.getElementById("phone").value = phoneNumber
        })

        // EDIT DATA/ UPDATE DATA
        document.getElementById("submit").onclick = function() {
            
           let companyname =  document.getElementById("name").value
           let contractorname =  document.getElementById("company").value
           let services =  document.getElementById("service").value
           let phoneNumber = document.getElementById("phone").value

           firebase.firestore().collection("contractors").doc(docId).update({
            companyName:companyname,
            contractorname:contractorname,
            serivces:services,
            phoneNumber:phoneNumber
           }).then(() => {
               window.location.href = "addcontractors.html"
           }).catch((error) => {
               console.log(error.message)
           })
        }
    }

    else {
        window.location.href = "index.html"
    }
})