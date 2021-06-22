const form = document.querySelector('#form');
const navn = document.querySelector('#navn');
const email = document.querySelector('#email');
const textarea = document.querySelector('#textarea');

form.addEventListener('submit', e => {
	e.preventDefault();
	checkInputs();
    form.submit(alert('Thank you!'));

});

function checkInputs() {
	const navnValue = navn.value.trim();
	const emailValue = email.value.trim();
	const textareaValue = textarea.value.trim();
	
	
	if(navnValue === '') {
		setErrorFor(navn, 'Navn felt skal ikke være tomt');
	} else {
		setSuccessFor(navn);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email felt skal ikke være tomt');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Det er ikke email');
	} else {
		setSuccessFor(email);
	}
	
    if(textareaValue === '') {
		setErrorFor(textarea, 'Felt skal ikke være tomt');
	} else{
		setSuccessFor(textarea);
	}
    

}

function setErrorFor(input) {
	const formControl = input.parentElement;
    formControl.className = '.input-error';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}



//Gallery js


function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
  }