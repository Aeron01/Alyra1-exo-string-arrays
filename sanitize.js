let str = '\n\n\t\t    AlIcE eT bOb EsSaYeNt De CoMmUnIqUeR sEcReTeMeNt, MaIs EvE vEiLlE  \n\n '
let str2 = str.replace(/\n\n\t\t/gi && /\n\n/gi, "")
let txt = str2.toLowerCase()
let trimwspc = txt.trim()
console.log(trimwspc)