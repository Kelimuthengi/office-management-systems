firebase.auth().onAuthStateChanged((user) => {
    // console.log(user.uid)

    if(user) {
        firebase.firestore().collection("incomes").get()
        .then((querysnapshot) => {
            let content = '';
            querysnapshot.forEach((doc) => {
                // console.log(doc.id, " =>" , doc.data())
                let incomeType = doc.data().income;
                let companyAccount = doc.data().companyAccount;
                let amountpaid = doc.data().AmountPaid;
                let docId = doc.data().docId

                let deletePath = "addincome.html" + "?" + docId

                content += '<tr>'
                content += '<td>' + incomeType +'</td>'
                content += '<td>' + companyAccount +'</td>'
                content += '<td>' + amountpaid +'</td>'
                content += '<td> <a class="btn btn-danger" href="'+deletePath+'">Delete</a>'  + '</td>'
                content += '</tr>'
            })

            $("#tbody").append(content)
        })
        // DELETE DATA
        var queryString = decodeURIComponent(window.location.search);
        var theDocId = queryString.substring(1);

        firebase.firestore().collection("incomes").doc(theDocId).delete()
        .then(() => {
            window.location.href = "addincome.html"
        })

    }
    
    else {
        window.location.href = "index.html"
    }
})