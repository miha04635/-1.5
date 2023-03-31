const container = document.querySelector('.swiper');
const showMore = document.querySelector('.more');
const bthOpen = document.querySelector('.more__button--open');

const icon = document.querySelector('.icon');

bthOpen.addEventListener('click', () => {
	icon.classList.add('icon__content');
	container.classList.add('container__height');
	bthclosed.style.display = 'block'
	bthOpen.textContent = 'Скрыть';
});

// bthclosed.addEventListener('click', () => {
// 	container.classList.remove('container__height');
// 	icon.classList.remove('icon__content');
// 	bthOpen.style.display = 'block';
// 	bthclosed.style.display = 'none'

// });




// C:\vs\Test_one\1.5--3