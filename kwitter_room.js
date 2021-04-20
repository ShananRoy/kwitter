var firebaseConfig = {
  apiKey: "AIzaSyANKtdVpTXshQpy-roVVEH7Y7BTQa-u32k",
  authDomain: "kwitter-11d21.firebaseapp.com",
  databaseURL: "https://kwitter-11d21-default-rtdb.firebaseio.com",
  projectId: "kwitter-11d21",
  storageBucket: "kwitter-11d21.appspot.com",
  messagingSenderId: "919359326656",
  appId: "1:919359326656:web:9dd61cb56b72a99c52a025"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome"+user_name+"!";
function addRoom()
{
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose:"adding room name"
  });
  localStorage.setItem("room_name",room_name);
  window.location="kwitter_page.html"
}
function getData()
{
  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = "";
   snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key;
     Room_names = childKey;
     console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row; });
       });
}
getData();
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
}
function logout()
{localStorage.removeItem("user_name");
localStorage.removeItem("room_name")
window.location="index.html";
}
