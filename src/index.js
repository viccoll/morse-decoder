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
    '*****': ' ',
};

function decode(expr) {
   
    let res='';
    let codeS='';
   let exp=expr;
  while(exp.length!==0)
    {
     codeS=exp.substring(0,10);
     let temp;
     let comp='';
     for(let i=0;i<10;i+=2)
     {
       temp=codeS[i]+codeS[i+1];
       if(temp==='11') comp+='-';
       else if(temp==='10') comp+='.';
       else if(temp==='**') comp+='*';
       
     }
     res+=MORSE_TABLE[comp];
    exp=exp.slice(10);
    }
    return res;
}

module.exports = {
    decode
}