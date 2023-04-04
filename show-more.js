// const container = document.querySelector('.swiper');
// const showMore = document.querySelector('.more');
// const showMoreButton = document.querySelector('.more__button');

// const icon = document.querySelector('.icon');

// showMoreButton.addEventListener('click', () => {
	
// 	icon.classList.add('icon__content');
// 	container.classList.add('container__height');
// 	showMoreButton.textContent = 'Скрыть';
// });

// if ( showMoreButton.textContent === 'Cкрыть') {
// 	console.log('1')
// 	showMoreButton.addEventListener('click', () => {
// 	icon.classList.remove('icon__content');
// 	container.classList.remove('container__height');
// 	showMoreButton.textContent = 'Показать всё';
// });
// }


function myFunction() {
	let container = document.querySelector('.swiper');
	let showMoreButton = document.querySelector('.more__button');
	let icon = document.querySelector('.icon');

	if (showMoreButton.textContent === 'Показать всё') {
	showMoreButton.addEventListener('click', () => {
		icon.classList.add('icon__content');
		container.classList.add('container__height');
		showMoreButton.textContent = 'Скрыть';
		});
	} else if (showMoreButton.textContent === 'Скрыть') {
	showMoreButton.addEventListener('click', () => {
		icon.classList.remove('icon__content');
		container.classList.remove('container__height');
		showMoreButton.textContent = 'Показать всё';
	});
	}

}

