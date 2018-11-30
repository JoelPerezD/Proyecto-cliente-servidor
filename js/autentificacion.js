firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;

    if(user != null){

      var email_id = user.email;
      document.getElementById("user_para").innerHTML = "Bienvenido: " + email_id;

    }

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";

  }
});

function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}

function logout(){
  firebase.auth().signOut();
}

// Elimina un foto de la BD

$('#borrar').click(function(){
  //var email = document.getElementById('firstname');
//firebase.database().ref("Photos/-LRzaGEbnJsbwLMhiHtT").remove(); // con esta linea puedo borrar
firebase.database().ref("Photos/"+texto.value).remove();
location.reload();// recarga la pagina 
});


// aqui estoy leyendo de la BD 
//me da toda la base de datos de la tabla Photos
firebase.database().ref("Photos")
.on("child_added",function(s){
   var user = s.val();

   $('#root').append("<img width='100' src='"+user.downloadUrl+"'/>")
   $('#root2').append("+++"+user.latitude)
   $('#root3').append("+++"+user.longitude)
   $('#root4').append("+++"+user.description)
  
  })


// me da la informacion de un foto en espesifico 
firebase.database().ref("Photos/-LS6BI_RhLtMXEsO7ApW")
.on("child_added",function(s){
   var user = s.val();

   
   $('#root5').append(s.val())
  
})
