// Reference messages collection
var emailupdatesRef = firebase.database().ref('EmailUpdates');
  
// Listen for a submit
document.getElementById('Subscribe').addEventListener('submit', submitForm);
  
// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('Name');
  var email = getInputVal('EmailUpdates');
  
  // Save Email Updates
  saveMessage(name, email);

  // Clear form
  document.getElementById('Subscribe').reset();
}

// Function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
  }

// Save message to firebase
function saveMessage(name, email){
    var newEmailUpdatesRef = emailupdatesRef.push();
    newEmailUpdatesRef.set({
      name: name,
      email:email
    });
  }
