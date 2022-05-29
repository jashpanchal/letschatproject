username=localStorage.getItem("Username");
Room_name = localStorage.getItem("")
function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(Room_name).push({
        name:Username,
        message:msg,
        like:0
    });
    document.getElementById("msg"),value = "";
}
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
    msgs = childData;
    //Start code
    console.log(Room_names);
    console.log(msgs);
    Name = msgs ['name'];
    themessage = msgs['message'];
    like = msgs['like'];
    Namewithtag = "<h4>" + Name + "<img class='user_tick' src='tick.png'></h4>";
    msgswithtag = "<h4 class='message_h4'>" + msgs + "</h4>";
    likebutton = "<button class='btn btn-warning' id=" + Room_names + " value=" + like + " onclick='updatelike(this.id)'>";
    //row = "<div class='room_name'id="+Room_names+"onclick='rtrn(this.id)' >#"+Room_names+"</div><hr>";
    spanwithtag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button></h4>"

    row = Namewithtag + msgswithtag + likebutton + spanwithtag;
    document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData(); button
function update_like(){
    console.log("clicked on the like button -" + message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    updated_likes = Number(likes) + 1;
    console.log(updated_likes);

    firebase.database().ref(Room_name).child(msg).update({like : updated_likes});
}

function logout(){
    localStorage.removeItem("Username");
    localStorage.removeItem("inputaddroom");
    window.location.replace("index.html")
}

function back2(){
    window.location.replace("kwitter_room.html");
}