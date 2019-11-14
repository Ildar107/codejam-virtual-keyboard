import Keyboard from './keyboard.mjs';

function ready() {
  if (!localStorage.getItem('currentLanguage')) {
    localStorage.setItem('currentLanguage', 'ru');
  }
  const wrapper = document.createElement('div');
  const textarea = document.createElement('textarea');
  wrapper.className = 'wrapper';
  document.body.append(wrapper);
  wrapper.append(textarea);
  const keyboard = new Keyboard(wrapper);
  keyboard.create();
  document.onkeydown = (e) => {
    if (e.shiftKey && e.altKey) {
      localStorage.setItem('currentLanguage', localStorage.getItem('currentLanguage') === 'ru' ? 'en' : 'ru');
      keyboard.changeLanguage();
    }
    if (keyboard.map.has(e.code)) {
      const key = keyboard.map.get(e.code);
      key.domElement.onmousedown(e);
      if(e.repeat)
        key.domElement.onclick(e);
      if (!e.altKey && !e.ctrlKey) {
        e.preventDefault();
      }
    }
  };
  document.onkeyup = (e) => {
    if (keyboard.map.has(e.code)) {
      const key = keyboard.map.get(e.code);
      key.domElement.onclick(e);
      if (!e.altKey && !e.ctrlKey) {
        e.preventDefault();
      }
    }
  };
}

document.addEventListener('DOMContentLoaded', ready);
