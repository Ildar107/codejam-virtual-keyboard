
import GroupKeyConstruction from './groupKeyConstruction.js';
import KeyboardConstruction from './keyboardConstruction.js';

export default class Keyboard {
    constructor(wrapper, keyboardConstruction = null) {
      this.wrapper = wrapper;
      this.keyboardConstruction = keyboardConstruction || (new KeyboardConstruction());
      this.keyboard = document.createElement('div');
      this.keyboard.className = 'keyboard';
      this.wrapper.append(this.keyboard);
      this.map = new Map();
      this.isCapsLockOn = false;
    }
  
    create() {
      this.keyboardConstruction.allLines.forEach((line) => {
        const keyboardLine = document.createElement('div');
        keyboardLine.className = 'line';
        this.keyboard.append(keyboardLine);
        line.forEach((item) => {
          keyboardLine.append(item.getDOMElement());
          item.setMouseEvent(this);
          if (item instanceof GroupKeyConstruction) {
            this.map.set(item.element1.code, item.element1);
            this.map.set(item.element2.code, item.element2);
          } else {
            this.map.set(item.code, item);
          }
        });
      });
    }
  
    changeLanguage() {
      this.keyboardConstruction.allLines.forEach((line) => {
        line.forEach((item) => {
          item.changeLanguage();
        });
      });
    }
  }