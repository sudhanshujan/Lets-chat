//YOUR FIREBASE LINKS
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
    
   user_name=localStorage.getItem("user_name");
   room_name = localStorage.getItem("room_name");


  


function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";

}



