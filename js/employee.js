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
            nextofkinid:nextofkinid
        }).then(() => {
            window.location.href = "addemployee.html";
        }).catch((error) => {
            console.log(error)
        })
    }
    }

    else {
        window.location.href = "index.html"
    }
})