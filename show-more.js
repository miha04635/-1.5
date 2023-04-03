const container = document.querySelector('.swiper');
const showMore = document.querySelector('.more');
const bthOpen = document.querySelector('.more__button');

const icon = document.querySelector('.icon');

	bthOpen.addEventListener('click', () => {
	icon.classList.add('icon__content');
	console.log('1');
	container.classList.add('container__height');
	bthOpen.classList.add('more__button--closed');
	bthOpen.classList.remove('more__button--open');
	bthOpen.textContent = 'Скрыть';
});

if (bthOpen === 'Скрыть') {

bthOpen.addEventListener('click', () => {
	console.log('2');
	icon.classList.remove('icon__content');
	container.classList.remove('container__height');
	bthOpen.classList.remove('more__button--closed');
	bthOpen.classList.add('more__button--open');
	bthOpen.textContent = 'Показать всё';
});
}


