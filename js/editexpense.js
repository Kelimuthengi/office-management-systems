firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        // console.log(user.uid)

        // Get expenses
        let queryString = decodeURIComponent(window.location.search);
        let editId = queryString.substring(1)
        // console.log(editId)
        firebase.firestore().collection("expenses").doc(editId).get()
        .then((doc) => {

            let amount = doc.data().amount
            let spentOn = doc.data().spent
            let date = doc.data().date
            let auth = doc.data().auth
            console.log(auth)

            document.getElementById("amount").value = amount;
            document.getElementById("spentOn").value = spentOn;
            document.getElementById("date").value = date;
            document.getElementById("authorized").value = auth;
           
        })

            // Editing a document
            document.getElementById("savechanges").onclick = function () {

                var amount = document.getElementById("amount").value;
                var spentOn = document.getElementById("spentOn").value;
                var date = document.getElementById("date").value;
                var auth = document.getElementById("authorized").value;

                firebase.firestore().collection("expenses").doc(editId).update({
                    amount:amount,
                    spent:spentOn,
                    date:date,
                    auth:auth,

                }).then(() => {
                    window.location.href = "expenses.html"
                }).then(() => {
                    window.location.href = "editexpense.html"
                }).catch((error) => {
                    // console.log(error.message)
                })
            }
            
    }
    else {
        window.location.href = "index.html"
    }
})