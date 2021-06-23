const keyRepr = {
        'Escape':'ESC',
        'F1':'F1',
        'F2':'F2',
        'F3':'F3',
        'F4':'F4',
        'F5':'F5',
        'F6':'F6',
        'F7':'F7',
        'F8':'F8',
        'F9':'F9',
        'F10':'F10',
        'F11':'F11',
        'F12':'F12',
        'PrintScreen':'PRTSCR',
        'Delete':'DEL',
        'Backquote':'`',
        'Digit1':'1',
        'Digit2':'2',
        'Digit3':'3',
        'Digit4':'4',
        'Digit5':'5',
        'Digit6':'6',
        'Digit7':'7',
        'Digit8':'8',
        'Digit9':'9',
        'Digit0':'0',
        'Minus':'-',
        'Equal':'=',
        'Backspace':'Backspace',
        'Home':'Home',
        'Tab':'TAB',
        'KeyQ':'Q',
        'KeyW':'W',
        'KeyE':'E',
        'KeyR':'R',
        'KeyT':'T',
        'KeyY':'Y',
        'KeyU':'U',
        'KeyI':'I',
        'KeyO':'O',
        'KeyP':'P',
        'BracketLeft':'[',
        'BracketRight':']',
        'Backslash':'\\',
        'PageUp':'PGUP',
        'CapsLock':'CAPS LOCK',
        'KeyA':'A',
        'KeyS':'S',
        'KeyD':'D',
        'KeyF':'F',
        'KeyG':'G',
        'KeyH':'H',
        'KeyJ':'J',
        'KeyK':'K',
        'KeyL':'L',
        'Semicolon':';',
        'Quote':'\'',
        'Enter':'ENTER',
        'PageDown':'PGDN',
        'ShiftLeft':'SHIFT',
        'KeyZ':'Z',
        'KeyX':'X',
        'KeyC':'C',
        'KeyV':'V',
        'KeyB':'B',
        'KeyN':'N',
        'KeyM':'M',
        'Comma':',',
        'Period':'.',
        'Slash':'/',
        'ShiftRight':'SHIFT',
        'ArrowUp':'^',
        'End':'END',
        'ControlLeft':'CTRL',
        'MetaLeft':'+',
        'AltLeft':'ALT',
        'AltRight':'ALT',
        'Space':'____',
        'IntlBackslash':'\\',
        'Fn':'Fn',
        'ControlRight':'CTRL',
        'ArrowLeft':'<',
        'ArrowDown':'v',
        'ArrowRight':'>'
}


const keyMap = [
        ['Escape','F1','F2','F3','F4','F5','F6','F7','F8','F9','F10','F11','F12','PrintScreen','Delete'],
        ['Backquote','Digit1','Digit2','Digit3','Digit4','Digit5','Digit6','Digit7','Digit8','Digit9','Digit0','Minus','Equal','Backspace','Home'],
        ['Tab','KeyQ','KeyW','KeyE','KeyR','KeyT','KeyY','KeyU','KeyI','KeyO','KeyP','BracketLeft','BracketRight','Backslash','PageUp'],
        ['CapsLock','KeyA','KeyS','KeyD','KeyF','KeyG','KeyH','KeyJ','KeyK','KeyL','Semicolon','Quote','Enter','PageDown'],
        ['ShiftLeft','KeyZ','KeyX','KeyC','KeyV','KeyB','KeyN','KeyM','Comma','Period','Slash','ShiftRight','ArrowUp','End'],
        ['ControlLeft','MetaLeft','AltLeft','Space','IntlBackslash','AltRight','Fn','ControlRight','ArrowLeft','ArrowDown','ArrowRight']
]

// const disabledKeys =  ['PrintScreen','MetaLeft','AltLeft','AltRight','Fn'];
const disabledKeys = [];

const keyLayout = keyMap.map(row => row.map(keyCode => ({
        keyCode: keyCode,
        height: '82px',
        width: '82px',
        fontSize: '1.1rem'
})))

        // first row
keyLayout[0] = keyLayout[0].map(key => {
        return {
        ...key,
        height: '45px',
        width: '85px',
        fontSize: '0.7rem'
        }
})

        // second row
// backquote
keyLayout[1][0].width = '45px';
// backspace
keyLayout[1][13].width = '165px';
keyLayout[1][13].fontSize = '0.8rem';
// home
keyLayout[1][14].fontSize = '0.8rem';

        // third row
// tab
keyLayout[2][0].width = '95px';
keyLayout[2][0].fontSize = '0.8rem';
// backslash
keyLayout[2][13].width = '115px';
// pageup
keyLayout[2][14].fontSize = '0.8rem';

        // fourth row
// CAPSLOCK
keyLayout[3][0].width = '120px';
keyLayout[3][0].fontSize = '0.8rem';
// Enter
keyLayout[3][12].width = '180px';
keyLayout[3][12].fontSize = '0.8rem';
// page down
keyLayout[3][13].fontSize = '0.8rem';

        // fifth row
// leftshift
keyLayout[4][0].width = '150px';
keyLayout[4][0].fontSize = '0.8rem';
// rightshift
keyLayout[4][11].width = '150px';
keyLayout[4][11].fontSize = '0.8rem';
// end
keyLayout[4][13].fontSize = '0.8rem';

        // sixth row
// leftctrl
keyLayout[5][0].width = '120px';
keyLayout[5][0].fontSize = '0.8rem';
// leftalt
keyLayout[5][2].fontSize = '0.8rem';
// space
keyLayout[5][3].width = '445px';
// rightalt
keyLayout[5][5].fontSize = '0.8rem';
// fn
keyLayout[5][6].fontSize = '0.8rem';
// rightctrl
keyLayout[5][7].fontSize = '0.8rem';

export default keyLayout;
export {
        keyRepr,
        disabledKeys
}