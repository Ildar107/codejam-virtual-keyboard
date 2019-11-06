import KeyLocalisation from './keyLocalisation.js';

export default class KeyConstruction {
    constructor(code, data, isSystemType = false) {
      this.code = code;
      this.isSystemType = isSystemType;
      this.localisation = new KeyLocalisation(data);
      this.domElement = document.createElement('div');
      this.keyValue = {};
    }
  
    getDOMElement() {
      this.domElement.className = 'key';
      this.createInnerHtml();
      return this.domElement;
    }
  
    changeLanguage() {
      this.createInnerHtml();
    }
  
    createInnerHtml() {
      this.keyValue = this.localisation.getLoacalisatedKey();
      if (this.keyValue.upperValue !== null) {
        if ((this.code === 'Backquote' || this.code === 'Minus' || this.code === 'Equal')) {
          this.domElement.innerHTML = `<span>${this.keyValue.value}<sup><sup>${this.keyValue.upperValue}</sup></sup></span>`;
        } else {
          this.domElement.innerHTML = `<span>${this.keyValue.value}<sup>${this.keyValue.upperValue}</sup></span>`;
        }
      } else this.domElement.innerHTML = `<span>${this.keyValue.value}</span>`;
    }
  
    setMouseEvent(keyboard) {
      if (this.domElement === undefined) return;
  
      this.domElement.onmouseout = () => {
        this.domElement.className = this.domElement.className.replace(/ on-key-press/g, '');
      };
  
      this.domElement.onmousedown = () => {
        this.domElement.className += ' on-key-press';
      };
  
      this.domElement.onclick = (e) => {
        this.domElement.className = this.domElement.className.replace(/ on-key-press/g, '');
        if (e.ctrlKey || e.altKey) { return; }
        const textarea = document.getElementsByTagName('textarea')[0];
        let value = '';
        if (keyboard.isCapsLockOn && this.keyValue.upperValue === null) {
          value = e.shiftKey ? this.keyValue.value.toLowerCase() : this.keyValue.value.toUpperCase();
        } else if (keyboard.isCapsLockOn && this.keyValue.upperValue !== null) {
          value = e.shiftKey ? this.keyValue.upperValue : this.keyValue.value;
        } else if (!keyboard.isCapsLockOn && this.keyValue.upperValue === null) {
          value = e.shiftKey ? this.keyValue.value.toUpperCase() : this.keyValue.value.toLowerCase();
        } else if (!keyboard.isCapsLockOn && this.keyValue.upperValue !== null) {
          value = e.shiftKey ? this.keyValue.upperValue : this.keyValue.value;
        }
        const arr = textarea.value.split('');
        arr.splice(textarea.selectionStart, textarea.selectionEnd - textarea.selectionStart, value);
        const position = textarea.selectionStart;
        textarea.value = arr.join('');
        textarea.selectionStart = position + 1;
        textarea.selectionEnd = textarea.selectionStart;
        textarea.focus();
      };
    }
  }