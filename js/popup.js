const contactLink = document.querySelector(".contact-form-link");
const contactModal = document.querySelector(".modal-contact");
const contactForm = document.querySelector(".contact-form");
const contactCloseButton = contactModal.querySelector(".modal-close");
const inputFirstName = contactModal.querySelector("input[name=user-name]");
const inputEmail = contactModal.querySelector(".contact-user-mail");
const mapLink = document.querySelector(".map-link");
const mapModal = document.querySelector(".modal-map");
const mapCloseButton = mapModal.querySelector(".modal-close");

contactLink.addEventListener("click", function (evt) {
	if (mapModal.classList.contains("hide-modal")) {
		evt.preventDefault();
		contactModal.classList.remove("hide-modal");
		inputFirstName.focus();
	} else {
		evt.preventDefault();
		mapModal.classList.add("hide-modal");
		contactModal.classList.remove("hide-modal");
		inputFirstName.focus();
	}
});

mapLink.addEventListener("click", function (evt) {
	if (contactModal.classList.contains("hide-modal")) {
		evt.preventDefault();
		mapModal.classList.remove("hide-modal");
	} else {
		evt.preventDefault();
		contactModal.classList.add("hide-modal");
		mapModal.classList.remove("hide-modal");
	}
});

// contactCloseButton.addEventListener("click", function (evt) {
// 	evt.preventDefault();
// 	contactModal.classList.add("hide-modal");
// });

// mapCloseButton.addEventListener("click", function (evt) {
// 	evt.preventDefault();
// 	mapModal.classList.add("hide-modal");
// });

function fnclose(closebtn, modal) {
	closebtn.addEventListener("click", function (evt) {
		evt.preventDefault();
		modal.classList.add("hide-modal");
		contactModal.classList.remove("modal-error");
	})
}

fnclose(mapCloseButton, mapModal);
fnclose(contactCloseButton, contactModal);

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		if (!contactModal.classList.contains("hide-modal")) {
			evt.preventDefault();
			contactModal.classList.add("hide-modal");
			contactModal.classList.remove("modal-error");
		} else if (!mapModal.classList.contains("hide-modal")) {
			evt.preventDefault();
			mapModal.classList.add("hide-modal");
		}
	}
})

contactForm.addEventListener("submit", function (evt) {
	if (!inputEmail.value) {
		evt.preventDefault();
		contactModal.classList.remove("modal-error");
		contactForm.offsetWidth = contactForm.offsetWidth;
		contactModal.classList.add("modal-error");
		inputEmail.focus();
	}
})
