var firebaseConfig = {
      apiKey: "AIzaSyA2i4GkyJp2NnpOhlF2Y2-A9xEtgFeBjVA",
      authDomain: "kwitter-f0b88.firebaseapp.com",
      databaseURL: "https://kwitter-f0b88-default-rtdb.firebaseio.com",
      projectId: "kwitter-f0b88",
      storageBucket: "kwitter-f0b88.appspot.com",
      messagingSenderId: "980176401796",
      appId: "1:980176401796:web:1376c3bdc75867250659d1"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name= localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";
function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"     
      });
      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id=" + Room_names+"onclick='redirectToRoomName(this.id)'>#" + Room_names +"</div><hr>";
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
           window.location = "kwitter.html";
}