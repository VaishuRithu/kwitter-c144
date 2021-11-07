//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyApgTDFL5aXLbtaaOibnJe8pHD31pkgSc0",
      authDomain: "kwitter2-45be3.firebaseapp.com",
      databaseURL: "https://kwitter2-45be3-default-rtdb.firebaseio.com",
      projectId: "kwitter2-45be3",
      storageBucket: "kwitter2-45be3.appspot.com",
      messagingSenderId: "885946483098",
      appId: "1:885946483098:web:87bd6f547a19b658367a23"
    };
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);  
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom(){
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html"
}

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";

}

function logOut(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

