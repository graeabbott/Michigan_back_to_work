/*

<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.14.1/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/7.14.1/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCUMSjKcG6sh7DXfGIEjKtEbHQADr83Ems",
    authDomain: "returntoworkform.firebaseapp.com",
    databaseURL: "https://returntoworkform.firebaseio.com",
    projectId: "returntoworkform",
    storageBucket: "returntoworkform.appspot.com",
    messagingSenderId: "1005458884390",
    appId: "1:1005458884390:web:83c931263aa5b9117ce3e7",
    measurementId: "G-8NW8KHPYZ3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>

*/

export const environment = {
    production: false,
    firebase: {
      apiKey: "AIzaSyCUMSjKcG6sh7DXfGIEjKtEbHQADr83Ems",
      authDomain: "returntoworkform.firebaseapp.com",
      databaseURL: "https://returntoworkform.firebaseio.com",
      projectId: "returntoworkform",
      storageBucket: "returntoworkform.appspot.com",
      messagingSenderId: "1005458884390"
    }
  };