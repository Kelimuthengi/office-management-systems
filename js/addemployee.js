firebase.auth().onAuthStateChanged((user) => {
    // console.log(user.uid)
    
    if(user) {
        // GET ALL EMPLOYEES FROM DATABASE
        firebase.firestore().collection("employees").get()
        .then((querySnapshot) => {
            let content = '';
            querySnapshot.forEach((doc) => {
                // console.log(doc.id, " => ", doc.data())


                let employeeName = doc.data().employeeName
                let phoneNum = doc.data().phoneNum
                let department = doc.data().department
                let docId = doc.data().docId


                let morelink = "editemployee.html" + "?" + docId
                content += '<tr>'
                content += '<td>' + employeeName + '</td>'
                content += '<td>' + phoneNum + '</td>'
                content += '<td>' + department + '</td>'
                content += '<td><a href="'+morelink+'" class="btn btn-light">View More</a>'
                content += '</tr>'
            })

            $('#addemployee').append(content)
        })

    }
    else {
        window.location.href = "index.html"
    }
})