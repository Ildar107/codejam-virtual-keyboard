export default function init() {
  const wrapper = document.createElement('div');
  const textarea = document.createElement('textarea');
  const keyboardElement = document.createElement('div');
  const infoElement = document.createElement('p');
  const langElement = document.createElement('p');

  wrapper.classList.add('wrapper');
  keyboardElement.classList.add('keyboard');
  infoElement.classList.add('info');
  langElement.classList.add('info');

  infoElement.innerText = 'Сделано в OS Windows 10';
  langElement.innerText = 'Комбинация клавиш Shift + Alt переключает язык';

  wrapper.append(textarea, keyboardElement);
  wrapper.append(infoElement);
  wrapper.append(langElement);
  document.body.append(wrapper);

  textarea.focus();

  return keyboardElement;
}
