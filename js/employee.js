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

             firebase.firestore().collection("employees").doc().set( {

            employeeName:name,
            employeeId: Id,
            dateOfBirth:dob,
            phoneNum:phoneNum,
            department:department,
            portifolio:portifolio
        
        }).then(() => {
            window.location.reload();
        }).catch((error) => {
            console.log(error)
        })
    }
    }

    else {
        window.location.href = "index.html"
    }
})




    







// let datenow = new Date();
// console.log(datenow)

// //get current year
// let year = new Date().getFullYear();

// //get current daate
// let month = new Date().getMonth();

// let thedatenow = new Date().getDate();

// //get current month

// var fulldate = year + "-" +month + "-" + thedatenow;

// console.log(fulldate;