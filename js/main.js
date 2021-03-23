const mySwiper = new Swiper('.swiper-container', {
	loop: true,

	// Navigation arrows
	navigation: {
		nextEl: '.slider-button-next',
		prevEl: '.slider-button-prev',
	},
});

// Cart

const buttonCart = document.querySelector('.button-cart');
const modalCart = document.querySelector('#modal-cart');
const buttonCloseModal = document.querySelector('.modal-close');

const openModal = function() {
	modalCart.classList.add('show');
}

const closeModal = function() {
	modalCart.classList.remove('show');
}

buttonCart.addEventListener('click', openModal);
buttonCloseModal.addEventListener('click', closeModal);

// Close modal when click on overlay
document.onclick = function(e) {
	let target = e.target;
	if (target.classList.contains('overlay')) {
		closeModal();
	}
}

// Scroll smooth
{
	const scrollLinks = document.querySelectorAll('a.scroll-link');

	for (let i=0; i<scrollLinks.length; i++) {
		scrollLinks[i].addEventListener('click', function(e) {
			e.preventDefault();
			const id = scrollLinks[i].getAttribute('href');
			document.querySelector(id).scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			});
		});
	}
}
