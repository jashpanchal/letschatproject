username=localStorage.getItem("Username");
document.getElementById("Username").innerHTML = "welcome" + username;
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDFnoOdpWVqdkTWwBkB852jlQwei0svf3o",
      authDomain: "kwitterproject-1de8e.firebaseapp.com",
      databaseURL: "https://kwitterproject-1de8e-default-rtdb.firebaseio.com",
      projectId: "kwitterproject-1de8e",
      storageBucket: "kwitterproject-1de8e.appspot.com",
      messagingSenderId: "773259000613",
      appId: "1:773259000613:web:22aa3a853af2d57e9ff8cc"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("inputaddroom"+ Room_names);
      row = "<div class='room_name'id="+Room_names+"onclick='rtrn()' >#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML = row
      //End code
      });});}
getData();
function addroom(){
Room_name = document.getElementById("inputaddroom").value;
console.log(Room_name)
firebase.database().ref("/").child(Room_name).update({
      purpose : "adding room name"
});
localStorage.setItem("inputaddroom",Room_name);
window.location = "chatroom.html";
}
function rtrn(name){
      console.log(name);
      localStorage.setItem("inputaddroom",name);
      window.location = "chatroom.html";
}

function logout(){
      window.location = "index.html";
}