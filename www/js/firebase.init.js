angular.module('firebaseConfig', ['firebase'])

.run(function(){

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBit7HcypP1LtY7n2ijXNu2IPuXlMy3-Zw",
    authDomain: "mycity-dfcc2.firebaseapp.com",
    databaseURL: "https://mycity-dfcc2.firebaseio.com",
    storageBucket: "mycity-dfcc2.appspot.com",
  };
  firebase.initializeApp(config);

})




