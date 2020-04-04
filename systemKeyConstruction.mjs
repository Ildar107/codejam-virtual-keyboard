import KeyConstruction from './keyConstruction.mjs';

export default class SystemKeyConstruction extends KeyConstruction {
    constructor(code, value) {
      const data = code === 'Space' ? '' : value;
      super(code, [[data], [data]], true);
      this.value = value;
    }
  
    getDOMElement() {
      const domElement = super.getDOMElement();
      domElement.className += ` sys ${this.value.replace(/ /g, '-').toLowerCase()}`;
      return domElement;
    }
  
    setMouseEvent(keyboard) {
      if (this.domElement === undefined) { return; }
  
      this.domElement.onmouseout = () => {
        if (this.code !== 'CapsLock') {
          this.domElement.className = this.domElement.className.replace(/ on-key-press/g, '');
        }
      };
  
      this.domElement.onmousedown = (e) => {
        if(!e.repeat) {
          this.domElement.className += ' on-key-press';
        }
      };
  
      this.domElement.onclick = (e) => {
        if(!e.repeat) {
          this.domElement.className = this.domElement.className.replace(/ on-key-press/g, '');
        }
        const keyboardInner = keyboard;
        if (e.ctrlKey || e.altKey) { return; }
        if (this.code === 'CapsLock' && !keyboard.isCapsLockOn) {
          this.domElement.className += ' on-key-press';
          keyboardInner.isCapsLockOn = true;
          return;
        }
        if (this.code === 'CapsLock' && keyboard.isCapsLockOn) {
          this.domElement.className = this.domElement.className.replace(' on-key-press', '');
          keyboardInner.isCapsLockOn = false;
          return;
        }
        const textarea = document.getElementsByTagName('textarea')[0];
        let value = '';
        const deleteCount = textarea.selectionEnd - textarea.selectionStart;
        if (this.value === 'Ctrl') { return; }
        if (this.value === 'Alt') { return; }
        if (this.value === 'Shift') { return; }
        if (this.value === 'Tab') { value += '  '; }
        if (this.value === 'Enter') { value += '\n'; }
        if (this.value === 'Backspace' && deleteCount === 0) { textarea.selectionStart -= 1; }
        if (this.value === 'Del' && deleteCount === 0) { textarea.selectionEnd += 1; }
        if (this.value === 'Space') { value += ' '; }
        if (this.code === 'ArrowLeft') {
          textarea.selectionStart -= 1;
          if (!e.shiftKey) {
            textarea.selectionEnd = textarea.selectionStart;
          }
          textarea.focus();
          return;
        }
        if (this.code === 'ArrowRight') {
          if (e.shiftKey) {
            textarea.selectionStart += 1;
          } else {
            textarea.selectionStart += 1;
            textarea.selectionEnd = textarea.selectionStart;
          }
          textarea.focus();
          return;
        }
        if (this.code === 'ArrowUp') {
          const index = textarea.value.substring(0, textarea.selectionStart).lastIndexOf('\n');
          if (e.shiftKey) {
            textarea.selectionStart = index > 1 ? index - 1 : 0;
          } else {
            textarea.selectionStart = index > 1 ? index - 1 : 0;
            textarea.selectionEnd = textarea.selectionStart;
          }
          textarea.focus();
          return;
        }
        if (this.code === 'ArrowDown') {
          let index = textarea.value.substring(textarea.selectionEnd, textarea.value.length - 1).indexOf('\n');
          index = textarea.value.substring(textarea.selectionEnd + index + 1, textarea.value.length - 1).indexOf('\n');
          index = index === -1 ? textarea.value.length : index;
          if (e.shiftKey) {
            textarea.selectionEnd += index;
          } else {
            textarea.selectionStart += index + 1;
            textarea.selectionEnd = textarea.selectionStart;
          }
          textarea.focus();
          return;
        }
        const arr = textarea.value.split('');
        const position = textarea.selectionStart;
        arr.splice(textarea.selectionStart, textarea.selectionEnd - textarea.selectionStart, value);
        textarea.value = arr.join('');
        textarea.selectionStart = this.value === 'Del'
          || this.value === 'Backspace' ? position : position + 1;
        textarea.selectionEnd = textarea.selectionStart;
        textarea.focus();
      };
    }
  }