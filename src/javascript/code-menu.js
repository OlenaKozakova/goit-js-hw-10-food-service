import cardsTpl from '../templates/cards.hbs'
import menu from '../menu.json';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const refs = {
  itemCardsIndex: document.querySelector('.js-menu'),
  checkBox: document.querySelector('#theme-switch-toggle'),
  checkBoxClick: document.querySelector('body'),
};

const cardsIndex = createCardsIndex(menu);
refs.itemCardsIndex.insertAdjacentHTML('afterbegin', cardsIndex);

function createCardsIndex(menu) {
  return cardsTpl(menu);
}

refs.checkBox.addEventListener('change', choiceTheme);
refs.checkBox.addEventListener('change', newChoiceTheme);

function updateClass(addCla, remCla) {
refs.checkBoxClick.classList.add(addCla);
refs.checkBoxClick.classList.remove(remCla);
}

function choiceTheme(event) {
const check = refs.checkBox.checked;

if (check) {
updateClass(Theme.DARK, Theme.LIGHT);
} else {
updateClass(Theme.LIGHT, Theme.DARK);
}
}

function newChoiceTheme(event) {
  const check = refs.checkBox.checked;

  if (check) {
    localStorage.setItem('theme', Theme.DARK);
  } else {
    localStorage.removeItem('theme');
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

const localTheme = localStorage.getItem('theme');

if (localTheme === Theme.DARK) {
  refs.checkBoxClick.classList.add(Theme.DARK);
  refs.checkBox.checked = true;
}




