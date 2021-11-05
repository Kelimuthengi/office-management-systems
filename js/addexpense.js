firebase.auth().onAuthStateChanged((user) => {
    if(user) {

        console.log(user.uid);
        document.getElementById("submit").onclick = function() {
            let amount = document.getElementById("amount").value;
            let spent = document.getElementById("spenton").value;
            let date = document.getElementById("date").value;
            let authorized = document.getElementById("authorized").value;

            // Get data from user and send it to data base
            let docId =  firebase.firestore().collection("expenses").doc();
            docId.set( {
                amount:amount,
                spent:spent,
                date:date,
                auth:authorized,
                docId:docId.id,
                userId:user.uid

            }).then(() => {
                window.location.href = "expenses.html";
            }).catch((error) => {
                console.log(error.message)
            })
        }

    }

    else {
        window.location.href = "index.html"
    }
})