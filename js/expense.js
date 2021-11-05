firebase.auth().onAuthStateChanged((user) => {
    if (user) {

        // console.log(user.uid)

        firebase.firestore().collection("expenses").get().then((querySnapshot) => {
            var content = '';
            querySnapshot.forEach((doc) => {
                // console.log(doc.id, " => ", doc.data())

                

                let amount = doc.data().amount;
                let spentOn = doc.data().spent;
                let date = doc.data().date;
                let auth = doc.data().auth;
                let docId = doc.data().docId;

                let idCarrier = "expenses.html" + "?" + docId
                let editCarrier = "editexpense.html" + "?" + docId;

                content += '<tr>'
                content += '<td>' + amount +  '</td>';
                content += '<td>' + spentOn +  '</td>';
                content += '<td>' + date +  '</td>';
                content += '<td>' + auth +  '</td>';
                content += '<td><a class="btn btn-danger" href="'+idCarrier+'">Delete</a><a class="btn btn-success mx-5" href="'+editCarrier+'">Edit</a></td>'
         

                content += '</tr>'
            });

            $("#expenselist").append(content);
        });

        let queryString = decodeURIComponent(window.location.search);
         let recievedData = queryString.substring(1);


         // search data
         document.getElementById("search").onclick = function() {
             document.getElementById("expenselist").style.display = "none"
            let searchInput =  document.getElementById("searchinput").value;
 
         //    pulling data where the item name is the same as the search input
 
         firebase.firestore().collection("expenses").where("authorized", "==", searchInput).get()
         .then((querySnapshot) => {
             var content = '';
             querySnapshot.forEach((doc) => {
                 // console.log(doc.id, " => ", doc.data())
 
                 
 
                 let amount = doc.data().amount;
                 let spentOn = doc.data().spent;
                 let date = doc.data().date;
                 let auth = doc.data().auth;
                 let docId = doc.data().docId;
 
                 let idCarrier = "expenses.html" + "?" + docId
 
                 content += '<tr>'
                 content += '<td>' + amount +  '</td>';
                 content += '<td>' + spentOn +  '</td>';
                 content += '<td>' + date +  '</td>';
                 content += '<td>' + auth +  '</td>';
                 content += '<td><a class="btn btn-danger" href="'+ idCarrier +'">Delete</a></td>'
 
                 content += '</tr>'
             });
 
             $("#querylist").append(content);
         });
     
        }


        // Delete data
        firebase.firestore().collection("expenses").doc(recievedData).delete()
        .then(() => {
             window.location.href = "expenses.html";
        }).catch((error)=> {
            console.log(error.message)
        })
    }

    else {
        window.location.href = "index.html"
    }
})


                
                



