// cela fonctione mais je suis pas sur que ce soit la solution attendue.


let str = '\n\n\t\t    AlIcE eT bOb EsSaYeNt De CoMmUnIqUeR sEcReTeMeNt, MaIs EvE vEiLlE  \n\n '

/* c'est ma solution
let str2 = str.replace(/\n\n\t\t/gi && /\n\n/gi, "")
let txt = str2.toLowerCase()
let trimwspc = txt.trim()
console.log(trimwspc) */

// correction

const trimmed = str.trim();
const newString = trimmed.replace(
  /AlIcE eT bOb EsSaYeNt De CoMmUnIqUeR sEcReTeMeNt, MaIs EvE vEiLlE/gi,
  `Alice et Bob essayent de communiquer secrètement, mais Eve veille.`
);
console.log(newString);