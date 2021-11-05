firebase.auth().onAuthStateChanged((user) => {
    if (user) {
            // Inventory count
        firebase.firestore().collection("inventory").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                let count = querySnapshot.size;
                console.log(count)

                document.getElementById("inventoryCount").innerHTML = count
            })
        })


        // Employee count
        firebase.firestore().collection("employees").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                let count = querySnapshot.size;
                document.getElementById("employeecount").innerHTML = count
            })
        });

        // Contractors Count

        firebase.firestore().collection("contractors").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                let count = querySnapshot.size;
                document.getElementById("contractorsCount").innerHTML = count
            })
        })
        

    }else {

        window.location.href = "index.html"
    }
})