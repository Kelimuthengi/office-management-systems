firebase.auth().onAuthStateChanged((user) => {
    // console.log(user.uid);
    if(user) {
        document.getElementById("submit").onclick = function() {
            let account = document.getElementById("account").value;
            let incomeType = document.getElementById("incometype").value;
            let amount = document.getElementById("amount").value;
            let payType = document.getElementById("Payment").value;

           let docId =  firebase.firestore().collection("incomes").doc()
           docId.set( {
                companyAccount:account,
                income:incomeType,
                AmountPaid:amount,
                userId:user.uid,
                docId:docId.id,
                payType:payType
                
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