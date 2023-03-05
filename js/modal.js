// Get the modal
const modal = document.getElementById('contact-modal');

// Get all the "Contact Us" buttons on the page
const buttons = document.querySelectorAll('#contact-btn');

// Get the <span> element that closes the modal
const span = document.getElementsByClassName('close')[0];

// Loop through the buttons and add a click event listener to each one
buttons.forEach(function (button) {
	// When the user clicks the button, open the modal
	button.addEventListener('click', function () {
		// Get the modal element and display it
		const modal = document.getElementById('contact-modal');
		modal.style.display = 'block';
	});
});

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
	const modal = document.getElementById('contact-modal');
	modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = 'none';
	}
};

// Form validation and submission
const form = document.getElementById('contactForm');

form.addEventListener('submit', function (event) {
	event.preventDefault();
	if (form.checkValidity() === false) {
		alert('Please fill out all required fields.');
		return;
	}
	// Send email
	sendEmail();
});

function sendEmail() {
	// Get form data
	const name = document.getElementById('name').value;
	const email = document.getElementById('email').value;
	const linkedin = document.getElementById('linkedin').value;
	const comments = document.getElementById('comments').value;

	// Construct email message
	const subject = 'Contact Us Form Submission';
	const body = 'Name: ' + name + '\nEmail: ' + email;
	if (linkedin) {
		body += '\nLinkedIn URL: ' + linkedin;
	}
	body += '\nComments: ' + comments;

	// Send email using email client (change the email address to your own)
	window.location.href =
		'mailto:informprem7@gmail.com?subject=' +
		encodeURIComponent(subject) +
		'&body=' +
		encodeURIComponent(body);

	// Clear form inputs
	form.reset();

	// Close modal
	modal.style.display = 'none';
}
