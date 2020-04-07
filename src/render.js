import { RU } from './constants';
import {
  structure, ruKeyboard, enKeyboard, controls,
} from './description.json';

function appendGroupElement(key, domElement, line) {
  const className = key === 'ArrowUp' ? 'key arrow-up' : 'key arrow-down';
  domElement.classList.add(...className.split(' '));

  if (document.querySelector('.group-btn')) {
    const group = document.querySelector('.group-btn');
    group.appendChild(domElement);
    return;
  }

  const group = document.createElement('div');
  group.classList.add('group-btn');
  group.appendChild(domElement);
  line.append(group);
}

function setControlClass(domElement, key, value) {
  domElement.classList.add('sys', value.replace(/ /g, '-').toLowerCase());
}

function getcomplexHtml(key, value, domElement) {
  const element = domElement;
  if (key === 'Backquote' || key === 'Minus' || key === 'Equal') {
    element.innerHTML = `<span>${value[0]}</span><span class="upper-value"><sup><sup>${value[1]}</sup></sup></span>`;
  } else {
    element.innerHTML = `<span>${value[0]}</span><span class="upper-value"><sup>${value[1]}</sup></span>`;
  }
}

function setInnerHtml(key, value, domElement, line) {
  if (Array.isArray(value)) {
    getcomplexHtml(key, value, domElement);
    return;
  }
  const element = domElement;
  element.innerHTML = `<span>${value}</span>`;

  if (controls.find((x) => x === key)) { setControlClass(domElement, key, value); }

  if (key === 'ArrowUp' || key === 'ArrowDown') { appendGroupElement(key, domElement, line); }
}

export default function render(keyboardElement, lang, selectedButtons) {
  structure.forEach((line) => {
    const lineElement = document.createElement('div');
    lineElement.classList.add('line');
    keyboardElement.append(lineElement);
    line.forEach((key) => {
      const value = lang === RU ? ruKeyboard[key] : enKeyboard[key];
      const btn = document.createElement('div');
      btn.setAttribute('id', key);
      btn.classList.add('key');
      lineElement.append(btn);
      setInnerHtml(key, value, btn, lineElement);
    });
  });
  if (selectedButtons) {
    selectedButtons.forEach((x) => {
      const element = document.querySelector(`#${x.getAttribute('id')}`);
      if (element !== null) element.classList.add('on-key-press');
    });
  }
}
