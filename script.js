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

for (var i = 0; i < 6; i++) {

let btnView = document.getElementsByClassName("btn-success")[i];
let cardViewStatus = false;
let cardText = document.getElementsByClassName("card-text")[i];
let cardImage = document.getElementsByClassName("card-img-top")[i];

btnView.addEventListener("mouseover", function editCard(){

	if (cardViewStatus == false) {
		cardText.style.display = "none";
		cardImage.style.width = "20%";
		cardImage.style.height = "20%";
		cardViewStatus = true;
	}
	else if (cardViewStatus == true) {
		cardText.style.display = "block";
		cardImage.style.width = "100%";
		cardImage.style.height = "100%";
		cardViewStatus = false;
	}
})};





/////////////////////////////////////////////////////////////////////////////////////////////////
//// Functionality 7



let arrow = document.querySelectorAll("section.jumbotron")[0].getElementsByTagName("a")[1];

arrow.addEventListener("click", function cardsRotation(){
	let lastCard = document.getElementsByClassName("col-md-4")[5];
	let parent = document.getElementsByClassName("row")[1];
	parent.insertBefore(lastCard, parent.childNodes[0]);
} )





/////////////////////////////////////////////////////////////////////////////////////////////////
//// Functionality 8




let arrowBack = document.querySelectorAll("section.jumbotron")[0].getElementsByTagName("a")[0];

arrowBack.addEventListener("click", function cardsRotationInverse(event){
	event.preventDefault();
	let firstCard = document.getElementsByClassName("col-md-4")[0];
	let parent = document.getElementsByClassName("row")[1];
	parent.appendChild(firstCard);
} );







/////////////////////////////////////////////////////////////////////////////////////////////////
//// Functionality 9


let logo = document.getElementsByTagName("a")[3];
let body = document.getElementsByTagName("body")[0];
let logoStatus = false;


logo.addEventListener("click", function selectLogo(){
	

	if (logoStatus == false) {
		logoStatus = true;
		logo.style.backgroundColor = "green";
		if (logoStatus == true) {
			logo.addEventListener("keydown", function (event) {

			  switch (event.key) {
			    case "ArrowDown":
			      body.style.backgroundColor = "orange";
			      logoStatus == false; 
			      break;
			    case "ArrowLeft":
			      body.style.backgroundColor = "grey";
			      logoStatus == false; 
			      break;
			    case "Enter":
			      body.style.backgroundColor = "yellow";
			      logoStatus == false; 
			      break;
			    default:
			      logoStatus == false; // Quitter lorsque cela ne gère pas l'événement touche.
			  }

			});

		}


	}



	else if (logoStatus == true) {
		logoStatus = false;
		logo.style.backgroundColor = "red";
	}
});



