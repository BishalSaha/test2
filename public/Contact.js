// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "xxx",
  authDomain: "xxx",
  databaseURL: "xxx",
  projectId: "xxx",
  storageBucket: "xxx",
  messagingSenderId: "xxx",
  appId: "xxx",
  measurementId: "xxx"
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
