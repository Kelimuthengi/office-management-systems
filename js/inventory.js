firebase.auth().onAuthStateChanged((user) => {

    if(user) {

        // console.log(user.uid)
        // console.log(user.email)
    //    content =  '<div class="thediv">'

    //    content =  '</div>'
    // Get all inventory once
    firebase.firestore().collection("inventory").get()
    .then((querySnapshot) => {
        let content = '';
        querySnapshot.forEach((doc) => {
            
            console.log(doc.id, " => ", doc.data());

            var itemName = doc.data().itemName;
            var itemCode = doc.data().itemCode;
            var itemColor = doc.data().itemColor;
            var itemDesc = doc.data().itemDesc;
        
            content += '<tr >'
            content +=  '<td> ' + itemName +  '</td>';
            content +=  '<td> ' + itemCode +  '</td>';
            content += '<td>' + itemColor +  '</td>';
            content += ' <td> ' + itemDesc + ' </td> ';
            content += ' </tr> ';
        
        })
        
        $("#tbody").append(content);
        console.log(content)
    })

    } else {
        
        window.location.href = "index.html";
    }

})