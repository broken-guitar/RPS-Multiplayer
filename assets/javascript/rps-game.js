// INITIALIZE FIREBASE
var firebaseConfig = {
    apiKey: "AIzaSyDf--B9s0k5z30YQfDV-jXOHAjtt9UqWmQ",
    authDomain: "rps-game-d28da.firebaseapp.com",
    databaseURL: "https://rps-game-d28da.firebaseio.com",
    projectId: "rps-game-d28da",
    storageBucket: "rps-game-d28da.appspot.com",
    messagingSenderId: "300162737952",
    appId: "1:300162737952:web:6e3b755ff6d441376e9945"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// VARIABLES
var db = firebase.database();
var connectedRef = db.ref(".info/connected"); // built-in firebase 'special location' to track client connection states
// var playersRef = db.ref("/players");
// var chatRef = db.ref("/chat");

// FUNCTIONS

// example: check connected state
connectedRef.on("value", function (snap) {
    if (snap.val() === true) {
        // local user is connected
        // TODO whatever should happen when user online or reconnected

    } else {
        // local user disconnected
        // TODO stuff when user disconnectes
    }
});

// INIALIZE / MAIN