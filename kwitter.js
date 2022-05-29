function adduser(){
    var username=document.getElementById("inputusername").innerHTML;
    localStorage.setItem("user_name",username);
    window.location="kwitter_room.html";
}