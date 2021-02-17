let str = '\n\n\t\t    AlIcE eT bOb EsSaYeNt De CoMmUnIqUeR sEcReTeMeNt, MaIs EvE vEiLlE  \n\n '
let str2 = str.replace(/\n\n\t\t/gi && /\n\n/gi, "")
let txt = str2.toLowerCase()
let trimwspc = txt.trim()
console.log(trimwspc)

let name = 'Bob'

let namelc = name.toLowerCase()
let index = trimwspc.indexOf(namelc)

if (index > -1) {
  console.log(`L'occurence ${name} est bien présente dans cette phrase.`)
} else {
  console.log(`il n'y à pas d'ocurence ${name} dans cette phrase.`)
}