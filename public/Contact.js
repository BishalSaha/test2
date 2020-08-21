// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCBhLlik0YD-nP9IkdMmxNeUnXzAv3A-Cs",
  authDomain: "boring-men.firebaseapp.com",
  databaseURL: "https://boring-men.firebaseio.com",
  projectId: "boring-men",
  storageBucket: "boring-men.appspot.com",
  messagingSenderId: "956670404039",
  appId: "1:956670404039:web:a5c928c9707af6d38965e2",
  measurementId: "G-1LT5NFKT0B"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Reference messages collection
var contactRef = firebase.database().ref('Contact');

// Listen for a submit

document.getElementById('Contact').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();


  // Get values
  var firstname = getInputVal('FirstName');
  var lastname = getInputVal('LastName');
  var company = getInputVal('Company');
  var email = getInputVal('Email');
  var phone = getInputVal('PhoneNumber');
  var message = getInputVal('Message');

  // Save Contact
  saveMessage(firstname, lastname, company, email, phone, message);

  // Clear form
  document.getElementById('Contact').reset();

}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(firstname, lastname, company, email, phone, message){
  var newContactRef = contactRef.push();
  newContactRef.set({
    firstname: firstname,
    lastname: lastname,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}