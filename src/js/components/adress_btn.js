const adressEl = document.querySelector('.js-adress');
const btnCloseOpen = document.querySelector('.js-btn-adress');

btnCloseOpen.addEventListener('click', () => {
  adressEl.classList.toggle('adress--close');
})
