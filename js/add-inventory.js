firebase.auth().onAuthStateChanged((user) => {

    if(user){
        // console.log(user.uid)


        document.getElementById("submit").onclick = function() {
            var name = document.getElementById("name").value;
            var desc = document.getElementById("desc").value;
            var itemCode = document.getElementById("code").value;
            var color = document.getElementById("color").value;

          let docId = firebase.firestore().collection("inventory").doc()
          docId.set({

                itemName:name,
                itemDesc:desc,
                itemCode:itemCode,
                itemColor:color,
                docId:docId.id,
                userId:user.uid
                
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