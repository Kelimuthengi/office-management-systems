firebase.auth().onAuthStateChanged((user) => {
    // console.log(user.uid);
    if(user) {

        let queryString = decodeURIComponent(document.location.search);
        let docId = queryString.substring(1);

        firebase.firestore().collection("employees").doc(docId)
        .get().then((doc) => {

            let employeeName = doc.data().employeeName;
            let employeeId = doc.data().employeeId;
            // let employeedob = doc.data().dateOfBirth;
            let portifolio = doc.data().portifolio;
            let accountnum = doc.data().accnum;
            let salary = doc.data().salary;
            let nextOfKin = doc.data().nextofkinName;
            let nextOfKinId = doc.data().nextofkinid;
            // let userDocId = doc.data().docId;
            // let accNum = doc.data().accnum;
            let phoneNum = doc.data().phoneNum;
            let dob = doc.data().dateOfBirth;
            let employeeDep = doc.data().department;
    


            document.getElementById("name").value = employeeName ;
            document.getElementById("idNum").value = employeeId;
            document.getElementById("birthDate").value = dob ;
            document.getElementById("phone").value = phoneNum ;
            document.getElementById("department").value = employeeDep  ;
            document.getElementById("portifolio").value = portifolio ;
            document.getElementById("salary").value = salary;
            document.getElementById("accnum").value = accountnum;
            document.getElementById("nextofkin").value = nextOfKin;
            document.getElementById("nextofkinid").value = nextOfKinId;
        });

        document.getElementById("submit").onclick = function() {
           let employeeName = document.getElementById("name").value  ;
           let employeeId =  document.getElementById("idNum").value ;
           let dob =  document.getElementById("birthDate").value  ;
           let phoneNum =  document.getElementById("phone").value  ;
           let employeeDep = document.getElementById("department").value   ;
           let portifolio = document.getElementById("portifolio").value  ;
           let salary =  document.getElementById("salary").value ;
           let accountnum =  document.getElementById("accnum").value ;
           let nextOfKin = document.getElementById("nextofkin").value ;
           let nextOfKinId = document.getElementById("nextofkinid").value ;


           firebase.firestore().collection("employees").doc(docId).update({
            employeeName:employeeName,
            employeeId:employeeId,
            dateOfBirth:dob,
            phoneNum:phoneNum,
            department:employeeDep,
            portifolio:portifolio,
            salary:salary,
            accnum:accountnum,
            nextofkinName:nextOfKin,
            nextofkinid:nextOfKinId
           }).then(() => {
            window.location.href = "addemployee.html"
           }).catch((error) => {
               console.log(error.message)
           })
        }
    }
    else {
        window.location.href = "index.html"
    }
})