document.getElementById("login").onclick = function() {
    document.getElementById("login").style.display = "none"
    document.getElementById("loading").style.display = "block"
   let email =  document.getElementById("email").value;
   let password = document.getElementById("password").value;

   firebase.auth().signInWithEmailAndPassword(email,password).then((userCredential) => {


        window.location.href = "dashboard.html"
   }).catch((error) => {
       alert(error.message);
       document.getElementById("login").style.display = "block"
       document.getElementById("loading").style.display = "none"
   })

}