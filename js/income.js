firebase.auth().onAuthStateChanged((user) => {
    // console.log(user.uid);
    if(user) {
        document.getElementById("submit").onclick = function() {
            let account = document.getElementById("account").value;
            let incomeType = document.getElementById("incometype").value;
            let amount = document.getElementById("amount").value;

            firebase.firestore().collection("incomes").doc().set( {
                companyAccount:account,
                income:incomeType,
                AmountPaid:amount
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