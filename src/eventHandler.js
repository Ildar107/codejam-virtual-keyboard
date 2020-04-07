import { RU, EN } from './constants';
import render from './render';
import { controls } from './description.json';

let isCapsLockOn = false;

function getWrapper() {
  return document.querySelector('.wrapper');
}

function getTextarea() {
  return document.querySelector('textarea');
}

function hadnleControl(event, code) {
  // language change handler
  if (event.altKey && event.shiftKey) {
    const lang = localStorage.getItem('currentLanguage') || RU;
    const newLang = lang === RU ? EN : RU;
    const keyboardElement = document.querySelector('.keyboard');
    const selectedButtons = document.querySelectorAll('.on-key-press');
    keyboardElement.innerHTML = '';
    render(keyboardElement, newLang, selectedButtons);
    localStorage.setItem('currentLanguage', newLang);
    return;
  }

  if (code === 'AltLeft' || code === 'AltRight' || code === 'ShiftLeft' || code === 'ShiftRight' || code === 'CtrlLeft' || code === 'CtrlRight') { return; }

  // CapsLock handler
  if (code === 'CapsLock') {
    isCapsLockOn = !isCapsLockOn;
    return;
  }

  const textarea = getTextarea();
  let value = '';

  // Enter handler
  if (code === 'Enter') {
    value += '\n';
  }

  // Tab handler
  if (code === 'Tab') {
    value += '\t';
  }

  // Space handler
  if (code === 'Space') {
    value += ' ';
  }

  // Delete & Backspace handler
  const deleteCount = textarea.selectionEnd - textarea.selectionStart;

  if (code === 'Backspace' && deleteCount === 0) {
    textarea.selectionStart -= 1;
  }

  if (code === 'Delete' && deleteCount === 0) {
    textarea.selectionEnd += 1;
  }

  const arr = textarea.value.split('');
  const position = textarea.selectionStart;
  arr.splice(textarea.selectionStart, textarea.selectionEnd - textarea.selectionStart, value);
  textarea.value = arr.join('');
  textarea.selectionStart = code === 'Delete' || code === 'Backspace' ? position : position + 1;
  textarea.selectionEnd = textarea.selectionStart;
}

function handleDown(event) {
  if (/^(F[0-9])|(Escape)$/.test(event.code)) { return; }

  const wrapper = getWrapper();
  const textarea = getTextarea();
  const code = event.code || event.currentTarget.getAttribute('id');
  const element = wrapper.querySelector(`#${code}`);

  if (element && !element.classList.contains('on-key-press')) { element.classList.add('on-key-press'); }

  const lowElement = wrapper.querySelector(`#${code} span`);
  const upperElement = wrapper.querySelector(`#${code} .upper-value`);
  const value = lowElement !== null ? lowElement.innerText.toLowerCase() : '';
  const upperValue = upperElement !== null ? upperElement.innerText : value.toUpperCase();

  if (!controls.find((x) => x === code)) {
    textarea.value += (event.shiftKey || isCapsLockOn
      ? upperValue
      : value);
  } else { hadnleControl(event, code); }

  event.preventDefault();
}

function handleUpEvent(event) {
  if (/^(F[0-9])|(Escape)$/.test(event.code)) { return; }
  const wrapper = getWrapper();
  const textarea = getTextarea();

  if (event.code) {
    if (event.code !== 'CapsLock' || !isCapsLockOn) {
      const capsElement = wrapper.querySelector(`#${event.code}`);
      if (capsElement !== null) capsElement.classList.remove('on-key-press');
    }
    return;
  }

  document.body.querySelectorAll('.on-key-press').forEach((x) => {
    if (x.getAttribute('id') !== 'CapsLock' || !isCapsLockOn) { x.classList.remove('on-key-press'); }
  });
  event.preventDefault();
  textarea.focus();
}


export { handleDown, handleUpEvent };
