document.addEventListener("DOMContentLoaded", ready);

function ready() {
    let wrapper = document.createElement('div');
    let textarea = document.createElement('textarea');
    wrapper.className = 'wrapper';
    document.body.append(wrapper);
    wrapper.append(textarea);
    let keyboard = new Keyboard(wrapper, 'ru');
    keyboard.create();
}

class Keyboard {
    constructor(wrapper, language, keyboardConstruction = null) {
        this.wrapper = wrapper;
        this.language = language;
        this.keyboardConstruction = keyboardConstruction || (new KeyboardConstruction());
        this.keyboard = document.createElement('div');
        this.keyboard.className = 'keyboard';
        this.wrapper.append(this.keyboard);
    }

    create() {
        for(let [name, lineValue] of Object.entries(this.keyboardConstruction)) {
            let keyboardLine = document.createElement('div');
            keyboardLine.className = 'line';
            this.keyboard.append(keyboardLine);
            for(let item of lineValue) {
                let key = document.createElement('div');
                key.onmouseup = function(e){
                    let textarea = document.getElementsByTagName('textarea')[0];
                    if(e.shiftKey)
                        textarea.value += key.getElementsByTagName('sup')[0].textContent;
                    else
                        textarea.value += key.textContent;
                    console.log(e);
                };
                key.className = 'key';
                if(item[0] === 'Space') key.className += ' space';
                let keyValue = this.language === 'ru' ? item[1][0] : item[1][1];
                if(keyValue.upperValue !== null) {
                    if((item[0] === 'Backquote' || item[0] === 'Minus' || item[0] === 'Equal') 
                    && this.language === 'en')
                        key.innerHTML = `${keyValue.value}<sup><sup>${keyValue.upperValue}</sup></sup>`;
                    else
                        key.innerHTML = `${keyValue.value}<sup>${keyValue.upperValue}</sup>`;
                }
                else {
                    if(item[0] === 'ArrowUp' || item[0] === 'ArrowDown'){
                        let isGroupElementExist = document.getElementsByClassName('arrow-group').length !== 0;
                        let keyGroup = '';
                        if(!isGroupElementExist)
                            keyGroup = document.createElement('div');
                        else
                            keyGroup = document.getElementsByClassName('arrow-group')[0];
                        keyGroup.className = 'arrow-group sys';
                        if(!isGroupElementExist)
                            keyboardLine.append(keyGroup);
                        key.className = item[0] === 'ArrowUp' ? 'upper-arrow' : 'down-arrow';
                        key.innerHTML = `${keyValue.value}`;
                        keyGroup.appendChild(key);
                        continue;
                    }
                    else
                        key.innerHTML = `${keyValue.value}`;
                }
                if(keyValue.isSystemType)
                    key.className += ' sys ' + keyValue.value.replace(/ /g, '-').toLowerCase(); 
                keyboardLine.append(key);
            }
        }
    }

    changeLanguage() {

    }
}

class KeyboardConstruction {
    constructor() {
        this.line1 = new Map([
            ['Backquote', [ new keyValue('Ё'), new keyValue('`', '~')]],
            ['Digit1', [ new keyValue('1', '!'), new keyValue('1', '!')]],
            ['Digit2', [ new keyValue('2', '"'), new keyValue('2', '@')]],
            ['Digit3', [ new keyValue('3', '№'), new keyValue('3', '#')]],
            ['Digit4', [ new keyValue('4', ';'), new keyValue('4', '$')]],
            ['Digit5', [ new keyValue('5', '%'), new keyValue('5', '%')]],
            ['Digit6', [ new keyValue('6', ':'), new keyValue('6', '^')]],
            ['Digit7', [ new keyValue('7', '?'), new keyValue('7', '&')]],
            ['Digit8', [ new keyValue('8', '*'), new keyValue('8', '*')]],
            ['Digit9', [ new keyValue('9', '('), new keyValue('9', '(')]],
            ['Digit0', [ new keyValue('0', ')'), new keyValue('0', ')')]],
            ['Minus', [ new keyValue('-', '_'), new keyValue('-', '_')]],
            ['Equal', [ new keyValue('=', '+'), new keyValue('=', '+')]],
            ['Backspace', [ new keyValue('Backspace', null, true), new keyValue('Backspace', null, true)]]
        ]);

        this.line2 = new Map([
            ['Tab', [ new keyValue('Tab', null, true), new keyValue('Tab', null, true)]],
            ['KeyQ', [ new keyValue('Й'), new keyValue('Q')]],
            ['KeyW', [ new keyValue('Ц'), new keyValue('W')]],
            ['KeyE', [ new keyValue('У'), new keyValue('E')]],
            ['KeyR', [ new keyValue('К'), new keyValue('R')]],
            ['KeyT', [ new keyValue('Е'), new keyValue('T')]],
            ['KeyY', [ new keyValue('Н'), new keyValue('Y')]],
            ['KeyU', [ new keyValue('Г'), new keyValue('U')]],
            ['KeyI', [ new keyValue('Ш'), new keyValue('I')]],
            ['KeyO', [ new keyValue('Щ'), new keyValue('O')]],
            ['KeyP', [ new keyValue('З'), new keyValue('P')]],
            ['BracketLeft', [ new keyValue('Х'), new keyValue('[', '{')]],
            ['BracketRight', [ new keyValue('Ъ'), new keyValue(']', '}')]],
            ['Backslash', [ new keyValue('\\', '/'), new keyValue('\\', '|')]],
            ['Delete', [ new keyValue('Del', null, true), new keyValue('Del', null, true)]]
        ]);

        this.line3 = new Map([
            ['CapsLock', [ new keyValue('Caps Lock', null, true), new keyValue('Caps Lock', null, true)]],
            ['KeyA', [ new keyValue('Ф'), new keyValue('A')]],
            ['KeyS', [ new keyValue('Ы'), new keyValue('S')]],
            ['KeyD', [ new keyValue('В'), new keyValue('D')]],
            ['KeyF', [ new keyValue('А'), new keyValue('F')]],
            ['KeyG', [ new keyValue('П'), new keyValue('G')]],
            ['KeyH', [ new keyValue('Р'), new keyValue('H')]],
            ['KeyJ', [ new keyValue('О'), new keyValue('J')]],
            ['KeyK', [ new keyValue('Л'), new keyValue('K')]],
            ['KeyL', [ new keyValue('Д'), new keyValue('L')]],
            ['Semicolon', [ new keyValue('Ж'), new keyValue(';', ':')]],
            ['Quote', [ new keyValue('Э'), new keyValue('\'', '"')]],
            ['Enter', [ new keyValue('Enter', null, true), new keyValue('Enter', null, true)]]
        ]);

        this.line4 = new Map([
            ['ShiftLeft', [ new keyValue('Shift', null, true), new keyValue('Shift', null, true)]],
            ['KeyZ', [ new keyValue('Я'), new keyValue('Z')]],
            ['KeyX', [ new keyValue('Ч'), new keyValue('X')]],
            ['KeyC', [ new keyValue('С'), new keyValue('C')]],
            ['KeyV', [ new keyValue('М'), new keyValue('V')]],
            ['KeyB', [ new keyValue('И'), new keyValue('B')]],
            ['KeyN', [ new keyValue('Т'), new keyValue('N')]],
            ['KeyM', [ new keyValue('Ь'), new keyValue('M')]],
            ['Comma', [ new keyValue('Б'), new keyValue(',', '<')]],
            ['Period', [ new keyValue('Ю'), new keyValue('.', '>')]],
            ['Slash', [ new keyValue('.', ','), new keyValue('/', '?')]],
            ['ShiftRight', [ new keyValue('Shift', null, true), new keyValue('Shift', null, true)]]
        ]);

        this.line5 = new Map([
            ['ControlLeft', [ new keyValue('Ctrl', null, true), new keyValue('Ctrl', null, true)]],
            ['MetaLeft', [ new keyValue('Win'), new keyValue('Win')]],
            ['AltLeft', [ new keyValue('Alt'), new keyValue('Alt')]],
            ['Space', [ new keyValue(''), new keyValue('')]],
            ['AltRight', [ new keyValue('Alt'), new keyValue('Alt')]],
            ['ControlRight', [ new keyValue('Ctrl'), new keyValue('Ctrl')]],
            ['ArrowLeft', [ new keyValue('&#9668;'), new keyValue('&#9668;')]],
            ['ArrowUp', [ new keyValue('&#9650;'), new keyValue('&#9650;')]],
            ['ArrowDown', [ new keyValue('&#9660;', null, true), new keyValue('&#9660;', null, true)]],
            ['ArrowRight', [ new keyValue('&#9658;'), new keyValue('&#9658;')]]
        ]);
    }
}

class keyValue {
    constructor(value, upperValue = null, isSystemType = false) {
        this.value = value;
        this.upperValue = upperValue;
        this.isSystemType = isSystemType;
    }
}