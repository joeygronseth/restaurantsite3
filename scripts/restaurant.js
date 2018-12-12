// Created by: Joey Gronseth
//Date created: Dec 11, 2018
//Date of last revision: Dec 11, 2018


/*
function needsjs() {
	alert("This website works best when JavaScript is enabled!");
	}
	
document.addEventListener("DOMContentLoaded", needsjs());
*/
function validateInfo() {
	
	var name = document.forms["Contact"]["Name"].value;
	var email = document.forms["Contact"]["email"].value;
	var phone = document.forms["Contact"]["phone"].value;
	
	if ( name == null || name == "") {
		alert("Please fill in 'Name'");
		return false;
	} 
	if ( email == null || email == "" ) {
		alert("Please fill in 'Email'");
		return false;
	}
	if ( phone == null || phone == "" ) {
		alert("Please fill in 'Phone'");
		return false;
	} else {
			alert("Thank you for your submission!");
			return false;
		}
	return false;
}