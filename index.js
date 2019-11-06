document.addEventListener("DOMContentLoaded", ready);
let currentLanguage = 'ru';
function ready() {
    let wrapper = document.createElement('div');
    let textarea = document.createElement('textarea');
    wrapper.className = 'wrapper';
    document.body.append(wrapper);
    wrapper.append(textarea);
    let keyboard = new Keyboard(wrapper);
    keyboard.create();
    document.onkeydown = function (e) {
        if(e.shiftKey && e.altKey) {  
             currentLanguage = currentLanguage === 'ru' ? 'en' : 'ru';
             keyboard.changeLanguage();
        }
        if(!e.repeat && keyboard.map.has(e.code)) {
            let key = keyboard.map.get(e.code);
            if(key !== undefined && (!keyboard.isCapsLockOn || key.code !== 'CapsLock'))
                key.domElement.className += ' on-key-press';
        }
        if(e.code === 'CapsLock'){
            let key = keyboard.map.get(e.code);
            if(keyboard.isCapsLockOn) {
                key.domElement.className = key.domElement.className.replace(' on-key-press', '');
                keyboard.isCapsLockOn = false;
            }
            else
                keyboard.isCapsLockOn = true;
        }
    }
    document.onkeyup = function (e) {
        if(!keyboard.map.has(e.code) ||  e.code === 'CapsLock') return;
        let key = keyboard.map.get(e.code);
        if(key !== undefined)
            key.domElement.className = key.domElement.className.replace(' on-key-press', '');
    }
}

class Keyboard {
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
        for(let line of this.keyboardConstruction.allLines) {
            let keyboardLine = document.createElement('div');
            keyboardLine.className = 'line';
            this.keyboard.append(keyboardLine);
            for(let item of line) {
                keyboardLine.append(item.getDOMElement());
                item.setMouseEvent(this);
                if(item instanceof GroupKeyConstruction) {
                    this.map.set(item.element1.code, item.element1);
                    this.map.set(item.element2.code, item.element2);
                }  
                else
                    this.map.set(item.code, item);
            }
        }
    }

    changeLanguage() {
        for(let  line of this.keyboardConstruction.allLines) {
            for(let item of line) {
                item.changeLanguage();
            }
        }
    }
}

class KeyboardConstruction {
    constructor() {
        this.line1 = [
            new KeyConstruction('Backquote',[['Ё'],['`', '~']]),
            new KeyConstruction('Digit1',[['1', '!'],['1', '!']]),
            new KeyConstruction('Digit2',[['2', '"'],['2', '@']]),
            new KeyConstruction('Digit3',[['3', '№'],['3', '#']]),
            new KeyConstruction('Digit4',[['4', ';'],['4', '$']]),
            new KeyConstruction('Digit5',[['5', '%'],['5', '%']]),
            new KeyConstruction('Digit6',[['6', ':'],['6', '^']]),
            new KeyConstruction('Digit7',[['7', '?'],['7', '&']]),
            new KeyConstruction('Digit8',[['8', '*'],['8', '*']]),
            new KeyConstruction('Digit9',[['9', '('],['9', '(']]),
            new KeyConstruction('Digit0',[['0', ')'],['0', ')']]),
            new KeyConstruction('Minus',[['-', '_'],['-', '_']]),
            new KeyConstruction('Equal',[['=', '+'],['=', '+']]),
            new SystemKeyConstruction('Backspace', 'Backspace')
        ];

        this.line2 = [
            new SystemKeyConstruction('Tab', 'Tab'),
            new KeyConstruction('KeyQ',[['Й'],['Q']]),
            new KeyConstruction('KeyW',[['Ц'],['W']]),
            new KeyConstruction('KeyE',[['У'],['E']]),
            new KeyConstruction('KeyR',[['К'],['R']]),
            new KeyConstruction('KeyT',[['Е'],['T']]),
            new KeyConstruction('KeyY',[['Н'],['Y']]),
            new KeyConstruction('KeyU',[['Г'],['U']]),
            new KeyConstruction('KeyI',[['Ш'],['I']]),
            new KeyConstruction('KeyO',[['Щ'],['O']]),
            new KeyConstruction('KeyP',[['З'],['P']]),
            new KeyConstruction('BracketLeft',[['Х'],['[', '{']]),
            new KeyConstruction('BracketRight',[['Ъ'],[']', '}']]),
            new KeyConstruction('Backslash',[['\\', '/'],['\\', '|']]),
            new SystemKeyConstruction('Delete', 'Del')
        ];

        this.line3 = [
            new SystemKeyConstruction('CapsLock', 'Caps Lock'),
            new KeyConstruction('KeyA',[['Ф'],['A']]),
            new KeyConstruction('KeyS',[['Ы'],['S']]),
            new KeyConstruction('KeyD',[['В'],['D']]),
            new KeyConstruction('KeyF',[['А'],['F']]),
            new KeyConstruction('KeyG',[['П'],['G']]),
            new KeyConstruction('KeyH',[['Р'],['H']]),
            new KeyConstruction('KeyJ',[['О'],['J']]),
            new KeyConstruction('KeyK',[['Л'],['K']]),
            new KeyConstruction('KeyL',[['Д'],['L']]),
            new KeyConstruction('Semicolon',[['Ж'],[';', ':']]),
            new KeyConstruction('Quote',[['Э'],['\'', '"']]),
            new SystemKeyConstruction('Enter', 'Enter')
        ];

        this.line4 = [
            new SystemKeyConstruction('ShiftLeft', 'Shift'),
            new KeyConstruction('KeyZ',[['Я'],['Z']]),
            new KeyConstruction('KeyX',[['Ч'],['X']]),
            new KeyConstruction('KeyC',[['С'],['C']]),
            new KeyConstruction('KeyV',[['М'],['V']]),
            new KeyConstruction('KeyB',[['И'],['B']]),
            new KeyConstruction('KeyN',[['Т'],['N']]),
            new KeyConstruction('KeyM',[['Ь'],['M']]),
            new KeyConstruction('Comma',[['Б'],[',', '<']]),
            new KeyConstruction('Period',[['Ю'],['.', '>']]),
            new KeyConstruction('Slash',[['.', ','],['/', '?']]),
            new SystemKeyConstruction('ShiftRight', 'Shift')
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

    findKey(code) {
        for(let line of this.allLines)
            for(let item of line) {
                if(item instanceof GroupKeyConstruction) {
                    if(item.element1.code === code ) return  item.element1;
                    if(item.element2.code === code ) return  item.element2;
                }
                else if(item.code === code)   
                    return item;
            }
    }
}

class KeyConstruction {
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
        if(this.keyValue.upperValue !== null) {
            if((this.code === 'Backquote' || this.code === 'Minus' || this.code === 'Equal'))
                this.domElement.innerHTML = `${this.keyValue.value}<sup><sup>${this.keyValue.upperValue}</sup></sup>`;
            else
                this.domElement.innerHTML = `${this.keyValue.value}<sup>${this.keyValue.upperValue}</sup>`;
        } else this.domElement.innerHTML = `${this.keyValue.value}`;
    }

    setMouseEvent(keyboard) {
        if(this.domElement === undefined) return;

        this.domElement.blur = (e) => {
            this.domElement.className = this.domElement.className.replace(/ on-key-press/g, '');
        }
        this.domElement.onmousedown = (e) => {
            this.domElement.className += ' on-key-press';
        }

        this.domElement.onmouseup = (e) => {
            this.domElement.className = this.domElement.className.replace(/ on-key-press/g, '');
            let textarea = document.getElementsByTagName('textarea')[0];
            let value = ''
            if(keyboard.isCapsLockOn && this.keyValue.upperValue === null)
                value = e.shiftKey ? this.keyValue.value.toLowerCase() : this.keyValue.value.toUpperCase();
            else if(keyboard.isCapsLockOn && this.keyValue.upperValue !== null)
                value = e.shiftKey ? this.keyValue.upperValue : this.keyValue.value;
            else if(!keyboard.isCapsLockOn && this.keyValue.upperValue === null)
                value = e.shiftKey ? this.keyValue.value.toUpperCase() : this.keyValue.value.toLowerCase();
            else if(!keyboard.isCapsLockOn && this.keyValue.upperValue !== null)
                value = e.shiftKey ? this.keyValue.upperValue : this.keyValue.value;
            let arr =  textarea.value.split('')
            arr.splice(textarea.selectionStart, textarea.selectionEnd -  textarea.selectionStart, value);
            let position = textarea.selectionStart;
            textarea.value = arr.join('');
            textarea.selectionStart = textarea.selectionEnd = position + 1;
        }
    }
}

class SystemKeyConstruction extends KeyConstruction {
    constructor(code, value) {
        let data = code === 'Space' ? '' : value;
        super(code, [[data], [data]], true);
        this.value = value;
    }

    getDOMElement() {
        let domElement = super.getDOMElement();
        domElement.className += ' sys ' + this.value.replace(/ /g, '-').toLowerCase(); 
        return domElement;
    }

    setMouseEvent(keyboard) {
        if(this.domElement === undefined) return;
        this.domElement.onmousedown = (e) => {
            this.domElement.className += ' on-key-press';
            let textarea = document.getElementsByTagName('textarea')[0];
            textarea.focus();
        }

        this.domElement.onmouseup = (e) => {
            this.domElement.className = this.domElement.className.replace(/ on-key-press/g, '');
            if(this.code === 'CapsLock' && !keyboard.isCapsLockOn) {
                this.domElement.className += ' on-key-press';
                keyboard.isCapsLockOn = true;
                return;
            }
            if(this.code === 'CapsLock' && keyboard.isCapsLockOn) {
                this.domElement.className = this.domElement.className.replace(' on-key-press', '');
                keyboard.isCapsLockOn = false;
                return;
            }
            let textarea = document.getElementsByTagName('textarea')[0];
            let value = '';
            let deleteCount = textarea.selectionEnd - textarea.selectionStart;
            if(this.value === 'Tab') value += '\t';
            if(this.value === 'Enter') value += '\n';
            if(this.value === 'Backspace' && deleteCount === 0) textarea.selectionStart -= 1;
            if(this.value === 'Del' && deleteCount === 0) textarea.selectionEnd += 1;
            if(this.value === 'Space') value += ' ';  
            if(this.code === 'ArrowLeft') {
                textarea.selectionStart = textarea.selectionEnd = textarea.selectionStart - 1;
                return;
            }
            if(this.code === 'ArrowRight') {
                textarea.selectionStart = textarea.selectionEnd = textarea.selectionStart + 1;
                return;
            }
            let arr =  textarea.value.split('');
            let position = textarea.selectionStart;
            arr.splice(textarea.selectionStart, textarea.selectionEnd - textarea.selectionStart, value);
            textarea.value = arr.join('');
            textarea.selectionStart = textarea.selectionEnd = this.value === 'Del' 
                || this.value === 'Backspace' ? position : position + 1;

        }
    }
}

class GroupKeyConstruction {
    constructor(key1, className1, key2, className2) {
        this.element1 = key1;
        this.element2 = key2;
        this.className1 = className1;
        this.className2 = className2;
    }

    getDOMElement() {
        let group = document.createElement('div');
        group.className = 'group-btn';
        let domElement1 = this.element1.getDOMElement();
        let domElement2 = this.element2.getDOMElement();
        domElement1.className = this.className1;
        domElement2.className = this.className2;
        group.appendChild(domElement1);
        group.appendChild(domElement2);
        return group;
    }

    changeLanguage() {
        this.element1.changeLanguage();
        this.element2.changeLanguage();
    }

    setMouseEvent() {
        this.element1.setMouseEvent();
        this.element2.setMouseEvent();
    }
}

class KeyLocalisation {
    constructor(data) {
       this.data = data;
    }

    getLoacalisatedKey() {
        if(currentLanguage === 'ru')
            return new keyValue(this.data[0]);
        return new keyValue(this.data[1]);
    }
}

class keyValue {
    constructor(data) {
        this.value = data[0];
        this.upperValue = data[1] || null;
    }
}