import KeyConstruction from './keyConstruction.mjs';
import GroupKeyConstruction from './groupKeyConstruction.mjs';
import SystemKeyConstruction from './systemKeyConstruction.mjs';

export default class KeyboardConstruction {
    constructor() {
      this.line1 = [
        new KeyConstruction('Backquote', [['Ё'], ['`', '~']]),
        new KeyConstruction('Digit1', [['1', '!'], ['1', '!']]),
        new KeyConstruction('Digit2', [['2', '"'], ['2', '@']]),
        new KeyConstruction('Digit3', [['3', '№'], ['3', '#']]),
        new KeyConstruction('Digit4', [['4', ';'], ['4', '$']]),
        new KeyConstruction('Digit5', [['5', '%'], ['5', '%']]),
        new KeyConstruction('Digit6', [['6', ':'], ['6', '^']]),
        new KeyConstruction('Digit7', [['7', '?'], ['7', '&']]),
        new KeyConstruction('Digit8', [['8', '*'], ['8', '*']]),
        new KeyConstruction('Digit9', [['9', '('], ['9', '(']]),
        new KeyConstruction('Digit0', [['0', ')'], ['0', ')']]),
        new KeyConstruction('Minus', [['-', '_'], ['-', '_']]),
        new KeyConstruction('Equal', [['=', '+'], ['=', '+']]),
        new SystemKeyConstruction('Backspace', 'Backspace'),
      ];
  
      this.line2 = [
        new SystemKeyConstruction('Tab', 'Tab'),
        new KeyConstruction('KeyQ', [['Й'], ['Q']]),
        new KeyConstruction('KeyW', [['Ц'], ['W']]),
        new KeyConstruction('KeyE', [['У'], ['E']]),
        new KeyConstruction('KeyR', [['К'], ['R']]),
        new KeyConstruction('KeyT', [['Е'], ['T']]),
        new KeyConstruction('KeyY', [['Н'], ['Y']]),
        new KeyConstruction('KeyU', [['Г'], ['U']]),
        new KeyConstruction('KeyI', [['Ш'], ['I']]),
        new KeyConstruction('KeyO', [['Щ'], ['O']]),
        new KeyConstruction('KeyP', [['З'], ['P']]),
        new KeyConstruction('BracketLeft', [['Х'], ['[', '{']]),
        new KeyConstruction('BracketRight', [['Ъ'], [']', '}']]),
        new KeyConstruction('Backslash', [['\\', '/'], ['\\', '|']]),
        new SystemKeyConstruction('Delete', 'Del'),
      ];
  
      this.line3 = [
        new SystemKeyConstruction('CapsLock', 'Caps Lock'),
        new KeyConstruction('KeyA', [['Ф'], ['A']]),
        new KeyConstruction('KeyS', [['Ы'], ['S']]),
        new KeyConstruction('KeyD', [['В'], ['D']]),
        new KeyConstruction('KeyF', [['А'], ['F']]),
        new KeyConstruction('KeyG', [['П'], ['G']]),
        new KeyConstruction('KeyH', [['Р'], ['H']]),
        new KeyConstruction('KeyJ', [['О'], ['J']]),
        new KeyConstruction('KeyK', [['Л'], ['K']]),
        new KeyConstruction('KeyL', [['Д'], ['L']]),
        new KeyConstruction('Semicolon', [['Ж'], [';', ':']]),
        new KeyConstruction('Quote', [['Э'], ['\'', '"']]),
        new SystemKeyConstruction('Enter', 'Enter'),
      ];
  
      this.line4 = [
        new SystemKeyConstruction('ShiftLeft', 'Shift'),
        new KeyConstruction('KeyZ', [['Я'], ['Z']]),
        new KeyConstruction('KeyX', [['Ч'], ['X']]),
        new KeyConstruction('KeyC', [['С'], ['C']]),
        new KeyConstruction('KeyV', [['М'], ['V']]),
        new KeyConstruction('KeyB', [['И'], ['B']]),
        new KeyConstruction('KeyN', [['Т'], ['N']]),
        new KeyConstruction('KeyM', [['Ь'], ['M']]),
        new KeyConstruction('Comma', [['Б'], [',', '<']]),
        new KeyConstruction('Period', [['Ю'], ['.', '>']]),
        new KeyConstruction('Slash', [['.', ','], ['/', '?']]),
        new SystemKeyConstruction('ShiftRight', 'Shift'),
      ];
  
      this.line5 = [
        new SystemKeyConstruction('ControlLeft', 'Ctrl'),
        new SystemKeyConstruction('MetaLeft', 'Win'),
        new SystemKeyConstruction('AltLeft', 'Alt'),
        new SystemKeyConstruction('Space', 'Space'),
        new SystemKeyConstruction('AltRight', 'Alt'),
        new SystemKeyConstruction('ControlRight', 'Ctrl'),
        new SystemKeyConstruction('ArrowLeft', '&#9668;'),
        new GroupKeyConstruction(new SystemKeyConstruction('ArrowUp', '&#9650;'), 'arrow-up',
          new SystemKeyConstruction('ArrowDown', '&#9660;'), 'arrow-down'),
        new SystemKeyConstruction('ArrowRight', '&#9658;'),
      ];
  
      this.allLines = [this.line1, this.line2, this.line3, this.line4, this.line5];
    }
  }