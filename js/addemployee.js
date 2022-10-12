firebase.auth().onAuthStateChanged((user) => {
    console.log(user.uid)
    
    if(user) {
        // GET ALL EMPLOYEES FROM DATABASE
        firebase.firestore().collection("employees").get()
        .then((querySnapshot) => {
            let content = '';
            querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data())


                let employeeName = doc.data().employeeName
                let phoneNum = doc.data().phoneNum
                let department = doc.data().department
                let docId = doc.data().docId
                console.log(docId)
                let profilePic = doc.data().employeeImg

                // adding profilepic to page


                document.getElementById("profilepicimg").src = profilePic;
                let morelink = "editemployee.html" + "?" + docId
                let deleteLink = "addemployee.html"  + "?" + docId
                content += '<tr>'
                content += '<td>' + employeeName + '</td>'
                content += '<td>' + phoneNum + '</td>'
                content += '<td>' + department + '</td>'
                content += '<td><a href="'+morelink+'" class="btn btn-light mx-5">View More</a><a href="'+deleteLink+'" class="btn btn-danger">DELETE</a></td>'
                
                content += '</tr>'
            })

            $('#addemployee').append(content)
        });


        document.getElementById("search").onclick = function() {
            document.getElementById("searching").style.display = "block";
            document.getElementById("search").style.display = "none"
            var searchInput = document.getElementById("searchinput").value;

            console.log(searchInput)


            // SEARCHING EMPLOYEE
            firebase.firestore().collection("employees").where("employeeName"," == ",searchInput).get().then((querySnapshot) => {
                let content = '';
                querySnapshot.forEach((doc) => {
                    console.log(doc.id, " => " , doc.data())
                    
                    let employeeName = doc.data().employeeName;
                    let phoneNum = doc.data().phoneNum;
                    let department = doc.data().department;
                    // let employeeId = doc.data().employeeId;
                    // let employeedob = doc.data().dateOfBirth;
                    // let portifolio = doc.data().portifolio;
                    // let accountnum = doc.data().accnum;
                    // let salary = doc.data().salary;
                    // let nextOfKin = doc.data().nextofkinName;
                    // let nextOfKinId = doc.data().nextofkinid;
                    // let userDocId = doc.data().docId
                    // let docId = doc.data().docId

                    content += `<tr>`
                    content += `<td>${employeeName}</td>`
                    content += `<td>${phoneNum}</td>`
                    content += `<td>${department}</td>`
                    content += `<td><a href="">View More</a></td>`
                    content += `</tr>`
                });

                $('#searchmployee').append(content);

                // document.getElementById("searching").style.display = "none";
                
            }).then(() => {
                console.log("Changed succesfully")
            }).catch((error) => {
                console.log(error.message)
            });
        };


        let queryString = decodeURIComponent(window.location.search);
        let docId = queryString.substring(1);



        // DELETE DATA
        // firebase.firestore().collection("employees").doc(docId).delete()
        // .then(() => {
        //     window.location.href = "addemployee.html"
        // })

    }
    else {
        window.location.href = "index.html"
    }
})