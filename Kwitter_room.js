var firebaseConfig = {
      apiKey: "AIzaSyD-RMk-bPm9IufOQM4_YLS7psUZBi1yefM",
      authDomain: "kwitter-784b0.firebaseapp.com",
      databaseURL: "https://kwitter-784b0-default-rtdb.firebaseio.com",
      projectId: "kwitter-784b0",
      storageBucket: "kwitter-784b0.appspot.com",
      messagingSenderId: "862769729929",
      appId: "1:862769729929:web:84d818222f0a12724f5158"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
function addRoom()
{
      room_name = document.getElementById("room_name").value;
      
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";

}
function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("Room Name - " + Room_names);
row = "<div class= 'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names+"</div><hr>";
document.getElementById("output").innerHTML += row;
//End code
});});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}