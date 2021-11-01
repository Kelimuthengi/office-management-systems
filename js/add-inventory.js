firebase.auth().onAuthStateChanged((user) => {

    if(user){
        // console.log(user.uid)


        document.getElementById("submit").onclick = function() {
            var name = document.getElementById("name").value;
            var desc = document.getElementById("desc").value;
            var itemCode = document.getElementById("code").value;
            var color = document.getElementById("color").value;

            firebase.firestore().collection("inventory").doc().set({

                itemName:name,
                itemDesc:desc,
                itemCode:itemCode,
                itemColor:color
                
            }).then(() => {
                window.location.href = "add-inventory.html"
            }).catch((error) => {
                console.log(error)
            })
        }
    }

    else {
        window.location.href = "index.html"
    }
})