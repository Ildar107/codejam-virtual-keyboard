import init from './init';
import { handleDown, handleUpEvent } from './eventHandler';
import render from './render';
import { RU } from './constants';
import './style.css';

function ready() {
  const currentLanguage = localStorage.getItem('currentLanguage') || RU;
  const keyboardElement = init();
  render(keyboardElement, currentLanguage);
  document.body.addEventListener('keydown', handleDown);
  document.body.addEventListener('keyup', handleUpEvent);
  keyboardElement.querySelectorAll('.key').forEach((x) => x.addEventListener('mousedown', handleDown));
  document.addEventListener('mouseup', handleUpEvent);
}

document.addEventListener('DOMContentLoaded', ready);
