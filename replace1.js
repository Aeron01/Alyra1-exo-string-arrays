let txt = 'Bonjour, je suis Sofiane.'
let name = 'Sofiane'
let replname = 'Christian'
// D'abord faire une recherche avec la commande .indexof pour voir si le nom est présent
let indx = txt.indexOf(name)
console.log(`${txt}\n`)
if (indx > -1) {
  // si le nom est présent, procéder au remplacement grace a la commande .replace
  let newtxt = txt.replace(name, replname)
  console.log(newtxt)
} else {
  console.log(`le nom ${name} n'est pas dans la phrase`)
}