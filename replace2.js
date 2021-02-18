// Il est en vie :)

let txt = "In cryptography, Alice and Bob are fictional characters commonly used as placeholders in discussions about cryptographic protocols or systems.\n\
As the use of Alice and Bob became more widespread, additional characters were added, sometimes each with a particular meaning.\n\
The most common characters are Alice and Bob.Eve, Mallory, and Trent are also common names.Bonjour, je suis Sofiane."
let name = 'Bob'
let replname = 'Christian'
// D'abord faire une recherche avec la commande .indexof pour voir si le nom est présent
let indx = txt.indexOf(name)
console.log(`${txt}\n`)
if (indx > -1) {
  // Si le nom est présent, procéder au remplacement grace a la commande .replaceAll sur toutes les lignes
  let newtxt = txt.replaceAll(name, replname)
  console.log(newtxt)
} else {
  console.log(`le nom ${name} n'est pas dans la phrase`)
}