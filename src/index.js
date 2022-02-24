const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let phrase = '';
    let exprArr = expr.split('**********');
    exprArr.forEach(el => {
      const wordArr = [];
          let word = '';
          for (let i = 0; i < el.length; i += 10) {
              wordArr.push(el.slice(i, i + 10));
          }
      wordArr.forEach(el => {
              let morseArr = '';
              for (let i = 0; i < el.length; i += 2) {
                  if (el.slice(i, i + 2) == '10') morseArr += '.';
                  if (el.slice(i, i + 2) == '11') morseArr += '-';
              }
              word += MORSE_TABLE[morseArr];
      })
      phrase += word;
      phrase += ' ';
    })
  return phrase.trim();
  }

module.exports = {
    decode
}