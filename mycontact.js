// Configuration de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDoIgBfO2rCVao2NvY5DWBt1EuAOMsO0Wg",
  authDomain: "gestioncontact-9904f.firebaseapp.com",
  databaseURL: "https://gestioncontact-9904f-default-rtdb.firebaseio.com",
  projectId: "gestioncontact-9904f",
  storageBucket: "gestioncontact-9904f.firebasestorage.app",
  messagingSenderId: "444874863465",
  appId: "1:444874863465:web:5045a7df9108970454c3f8"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);
      
// reference your database
var CTAFormDB = firebase.database().ref("CTAFormDB");
      
document.getElementById("contactForm").addEventListener("submit", submitForm);
      
function submitForm(e) {
  e.preventDefault();
      
  var name = getElementVal("name");
  var email = getElementVal("email");
  var message = getElementVal("message");
      
  // console.log(fullname, email, selectwhere);
  saveMessages(name, email, message);
      
  // enable the alert
  // document.querySelector(".alert").style.display = "block";
      
  // remove the alert
  // setTimeout(() => {
  // document.querySelector(".alert").style.display = "none";
  // }, 3000);
      
  // reset the form
  document.getElementById("contactForm").reset();
      
}
      
const saveMessages = (name, email, message) => {
  var newCTAForm = CTAFormDB.push();
      
  newCTAForm.set({
    name: name,
    email: email,
    message: message
  });
};
      
const getElementVal = (id) => {
  return document.getElementById(id).value;
};
