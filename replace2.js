// cela marche mais pas comme je le voudrais. a revoir

let txt = "In cryptography, Alice and Bob are fictional characters commonly used as placeholders in discussions about cryptographic protocols or systems.\n\
As the use of Alice and Bob became more widespread, additional characters were added, sometimes each with a particular meaning.\n\
The most common characters are Alice and Bob.Eve, Mallory, and Trent are also common names.Bonjour, je suis Sofiane."
// let name = 'Alice'
let replname = 'Christian'
// D'abord faire une recherche avec la commande .indexof pour voir si le nom est présent
let indx = txt.indexOf('Alice')
console.log(`${txt}\n`)
// if (indx > -1) {
// si le nom est présent, procéder au remplacement grace a la commande .replace
let newtxt = txt.replace(/Alice/gi, replname)
console.log(newtxt)
// } else {
//  console.log(`le nom ${name} n'est pas dans la phrase`)
// }