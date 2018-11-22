firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    document.getElementById("user_div").style.display="block";
    document.getElementById("log_div").style.display="none";
   
   
  }
  else {
    // No user is signed in.
    document.getElementById("user_div").style.display="none";
    document.getElementById("log_div").style.display="block";
  }
});         
  //https://firebasestorage.googleapis.com/v0/b/unidrive-027.appspot.com/o/images%2FnameImage19112018_185479.jpg?alt=media&token=67c2159e-b720-47c8-a254-b69dd2f8d064
  https://firebasestorage.googleapis.com/v0/b/unidrive-027.appspot.com/o/images%2FnameImage20112018_110940.jpg?alt=media&token=e4642cff-e118-4e70-abf5-ac0d64b629bd
function login(){

  var usuario=document.getElementById("usuario").value;
  var contraseña =document.getElementById("contra").value;

  firebase.a)uth(.signInWithEmailAndPassword(usuario, contraseña).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message; 
  // ...
  window.alert("Try again " +errorMessage);
});

}
 function logout(){
  firebase.auth().signOut();
}

