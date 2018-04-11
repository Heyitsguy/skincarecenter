 ///////////////////////////////////////////////////////////////
// Mobile navigation menu
var menu = document.querySelector(".toggle");
var navLists = document.querySelectorAll(".nav-list");

menu.addEventListener("click", function(){
	for (var i = 0; i < navLists.length; i++){
		navLists[i].classList.toggle("navListOn");
	}
});
///////////////////////////////////////////////////////////////
// Modal
var modal = document.querySelector(".modal");
var closeBtn = document.querySelector(".close");

window.addEventListener("load",function(){
      setTimeout(delayedModal,1500);
});

function delayedModal(){
	modal.classList.toggle("navListOn");
}

closeBtn.addEventListener("click", function(){
	modal.classList.toggle("navListOn");
});








///////////////////////////////////////////////////////////////////////
 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDKvEUf0tYzAk-nnE7d_MCd7NHtlPA_lW4",
    authDomain: "skincare-f62d5.firebaseapp.com",
    databaseURL: "https://skincare-f62d5.firebaseio.com",
    projectId: "skincare-f62d5",
    storageBucket: "skincare-f62d5.appspot.com",
    messagingSenderId: "307946275969"
  };
  firebase.initializeApp(config);
// Refrence messages
var messagesRef = firebase.database().ref('messages');

 //Listen for form submit
 document.getElementById('contact-form').addEventListener('submit', submitForm);

// Submit form
  function submitForm(event){
 	event.preventDefault();
 	// Get Values
	var firstName = getInputVal('first-name');
	var lastName = getInputVal('last-name');
	var email = getInputVal('email');
	var message = getInputVal('message');
	// save message
	saveMessage(firstName, lastName, email, message);
	//Show Alert
	document.querySelector('.alert').style.display = 'block';
	//Hide alert after 3 sec
	setTimeout(function(){
		document.querySelector('.alert').style.display = 'none';
	}, 3000)
	//Clear form
	document.getElementById('contact-form').reset();
 }
// function to get form values
function getInputVal(id){
	return document.getElementById(id).value;
}
// Function to save message to firebase
function saveMessage(firstName, lastName, email, message){
	var newMessageRef = messagesRef.push();
	newMessageRef.set({
		firstName: firstName,
		lastName: lastName,
		email: email,
		message : message,
	});
}
