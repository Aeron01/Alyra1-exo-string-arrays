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

// Correction (une des solutions attendue)
console.log('\n\n\n')

str = str.trim()
str = str.toLowerCase()

console.log(str)

if (str.includes('bob')) {
  console.log('bob existe.')
} else {
  console.log('bob n\'est pas là.')
}

/*
// version non officielle plus élégante
let isExist = str.trim().toLowerCase().includes('bob')
if (isExist) {
  console.log('il existe !')
} else {
  console.log('il n\'existe pas')
}*/