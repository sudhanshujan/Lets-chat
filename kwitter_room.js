var firebaseConfig = {
      apiKey: "AIzaSyAb7-lngE5GhJ-9kPG9Pli9Nfrwg8DUBqU",
      authDomain: "kwitter-f9f3b.firebaseapp.com",
      databaseURL: "https://kwitter-f9f3b-default-rtdb.firebaseio.com",
      projectId: "kwitter-f9f3b",
      storageBucket: "kwitter-f9f3b.appspot.com",
      messagingSenderId: "138794840212",
      appId: "1:138794840212:web:72597a9378672efc140481"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name")
document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";


function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}





function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}


function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";

}






