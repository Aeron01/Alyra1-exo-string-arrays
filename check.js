let txt = 'JS, ECMAScript, esm6 peuvent être considérés comme des alias de Javascript'
let mot = 'Javascript'

console.log(`Est-ce que le mot ${mot} est présent dans la prase suivante : `)
console.log('\n' + txt + '\n')
// la commande .indexof sert a renvoyer l'indice de la 1er occurence de la valeur rechercher dans une string
// Elle renvois -1 si la valeur rechercher n'est pas trouvé
let index = txt.indexOf(mot)

if (index > -1) {
  console.log(`le mot ${mot} est présent à l'index ${index}.`)
} else {
  console.log(`le mot ${mot} n'est pas présent.`)
}