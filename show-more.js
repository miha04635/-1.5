const container = document.querySelector('.swiper');
const showMore = document.querySelector('.more');
const bthOpen = document.querySelector('.more__button');

const icon = document.querySelector('.icon');


if (bthOpen === 'Показать все') {

	bthOpen.addEventListener('click', () => {
	icon.classList.add('icon__content');
	container.classList.add('container__height');
	bthOpen.textContent = 'Скрыть';
});

}

if (bthOpen === 'Скрыть') {

	bthOpen.addEventListener('click', () => {
	icon.classList.remove('icon__content');
	container.classList.remove('container__height');
	bthOpen.textContent = 'Показать все';
	});
}
