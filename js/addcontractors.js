firebase.auth().onAuthStateChanged((user) => {
    // console.log(user.uid)

    if(user) {
        // Fetching data from the data base
        firebase.firestore().collection("contractors").get()
        .then((querySnapshot) => {
            let content = '';
            querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data())

                let compName = doc.data().companyName;
                let contName = doc.data().contractorname;
                let phoneNum = doc.data().phoneNumber;
                let service = doc.data().serivces;
                let docId = doc.data().docId
                console.log(service)

                let href = "addcontractors.html" + "?" + docId
                let edithref = "editcontractors.html" + "?" + docId
                content += '<tr>'
                content += '<td>' + compName + '</td>'
                content += '<td>' + contName + '</td>'
                content += '<td>' + phoneNum + '</td>'
                content += '<td>' + service + '</td>'
                content += '<td> <a class="btn btn-danger" href="'+href+'">Delete</a> <a href="'+edithref+'" class="btn btn-success mx-3">Edit</a> </td>'
                content += '</tr>'
            });

            $('#contractors').append(content);
        })


        
        document.getElementById("search").onclick = function() {
            // document.getElementById("contractors").style.display = "none"
         let searchInput = document.getElementById("searchinput").value;
            // Search for contractor
            firebase.firestore().collection("contractors").where("companyName", "==", searchInput)
            .get().then((querySnapshot) => {
                let content = '';
                querySnapshot.forEach((doc) => {
                    
                let compName = doc.data().companyName;
                let contName = doc.data().contractorname;
                let phoneNum = doc.data().phoneNumber;
                let service = doc.data().serivces;

                content += '<tr>'
                content += '<td>' + compName + '</td>'
                content += '<td>' + contName + '</td>'
                content += '<td>' + phoneNum + '</td>'
                content += '<td>' + service + '</td>'
                content += '</tr>'
                });
                $('#searchedcontractor').append(content);
            })

        }

        // Edit contractors
        


        // decode URL component
        let queryString = decodeURIComponent(window.location.search)
        let docId = queryString.substring(1)

        // DELETE DATA
        firebase.firestore().collection("contractors").doc(docId)
        .delete().then(() => {
            window.location.href = "addcontractors.html"
        })
    }

    else {

    }
})