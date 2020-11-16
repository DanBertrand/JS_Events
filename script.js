/////////////////////////////////////////////////////////////////////////////////////////////////
//// Functionality 1

let footer = document.getElementsByTagName("footer")[0], count = 0;

footer.addEventListener("click", function clickFooter(){
	count += 1;
	console.log("click n°" + count);
} );







/////////////////////////////////////////////////////////////////////////////////////////////////
//// Functionality 2

let btnNavBar = document.getElementsByClassName("navbar-toggler")[0];

btnNavBar.addEventListener("click", function toggling(){
	let navBarHeader = document.querySelector("header div");
	navBarHeader.classList.toggle("collapse");

});







/////////////////////////////////////////////////////////////////////////////////////////////////
//// Functionality 3

let btnFirstCard = document.getElementsByClassName("btn-group")[0].getElementsByTagName("button")[1];

btnFirstCard.addEventListener("click", function getInRed(){
	let textToEdit = document.getElementsByClassName("card-text")[0];
	textToEdit.style.color = "red"
} );







/////////////////////////////////////////////////////////////////////////////////////////////////
//// Functionality 4

let btnSecondCard = document.getElementsByClassName("btn-group")[1].getElementsByTagName("button")[1];
let textEditStatus = false;

btnSecondCard.addEventListener("click", function getInGreen(){
	let textToEdit = document.getElementsByClassName("card-text")[1];
	if (textEditStatus == false) {
		textToEdit.style.color = "green";
		textEditStatus = true;
	}
	else if (textEditStatus == true) {
		textToEdit.style.color = "#212529";
		textEditStatus = false;
	}
});






/////////////////////////////////////////////////////////////////////////////////////////////////
//// Functionality 5

let navBar = document.getElementsByClassName("navbar")[0];
let bootstrapStatus = true;

navBar.addEventListener("dblclick", function removeBootstrap(){
	let bootstrapLink = document.getElementsByTagName("link")[0];
	if (bootstrapStatus == true) {
		bootstrapLink.href = " ";
		navBar.style.backgroundColor = "pink";
		bootstrapStatus = false;
	}
	else if (bootstrapStatus == false) {
		bootstrapLink.href = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
		bootstrapStatus = true;
	}
} );




/////////////////////////////////////////////////////////////////////////////////////////////////
//// Functionality 6

