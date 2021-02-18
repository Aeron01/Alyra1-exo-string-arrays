// Je crois que celle la je suis pas sur de l'avoir vraiment comprise.

let str =
  '\n\n\t\t    AlIcE eT bOb EsSaYeNt De CoMmUnIqUeR sEcReTeMeNt, MaIs EvE vEiLlE  \n\n '

/* c'est ce que j'ai fait avant de tenter de la mettre sur une seule ligne
let strtrim = str.trim()
let strtuc = strtrim.toUpperCase()
let strspl = strtuc.split(" ")
let streach = strspl.forEach(element => console.log(`mot: ${element}`))*/

let = str.trim().toUpperCase().split(' ').forEach((elem) => console.log(`mot: ${elem}`))

// Correction (ma solution est bonne aussi)

// Nouveau programme
// On assainit et split
function sanitizeString(x) {
  return x.toUpperCase().trim().split(' ')
}
let array = sanitizeString(str)
// On imprime sur la console
// boucle for
for (let i = 0; i < array.length; ++i) {
  console.log(`mot: ${array[i]}`)
}
// for...of
for (let elem of array) {
  console.log(`mot: ${elem}`)
}
// forEach
array.forEach((elem) => {
  console.log(`mot: ${elem}`)
})
