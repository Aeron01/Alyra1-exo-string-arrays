// Je crois que celle la je suis pas sur de l'avoir vraiment comprise.

let str =
  '\n\n\t\t    AlIcE eT bOb EsSaYeNt De CoMmUnIqUeR sEcReTeMeNt, MaIs EvE vEiLlE  \n\n '

/* c'est ce que j'ai fait avant de tenter de la mettre sur une seulle ligne
let strtrim = str.trim()
let strtuc = strtrim.toUpperCase()
let strspl = strtuc.split(" ")
let streach = strspl.forEach(element => console.log(`mot: ${element}`))*/

let = str.trim().toUpperCase().split(' ').forEach((elem) => console.log(`mot: ${elem}`))