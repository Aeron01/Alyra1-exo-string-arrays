// Programme de comptage de tous les voyelles dans un texte

let txt = "Je suis le ténébreux, - le veuf, - l'inconsolé,\n\
Le prince d'Aquitaine à la tour abolie :\n\
Ma seule étoile est morte, - et mon luth constellé\n\
Porte le soleil noir de la Mélancolie.\n\
Dans la nuit du tombeau, toi qui m'as consolé,\n\
Rends - moi le Pausilippe et la mer d'Italie,\n\
La fleur qui plaisait tant à mon cœur désolé,\n\
Et la treille où le pampre à la rose s'allie.\n\
Suis - je Amour ou Phébus ? ...Lusignan ou Biron ?\n\
Mon front est rouge encor du baiser de la reine;\n\
J'ai rêvé dans la grotte où nage la sirène...\n\
Et j'ai deux fois vainqueur traversé l'Achéron;\n\
Modulant tour à tour sur la lyre d'Orphée\n\
Les soupirs de la sainte et les cris de la fée."
let nbvyl = 0 // initialisation du compteur des voyelles
let nbA = 0
let nbE = 0
let nbI = 0
let nbO = 0
let nbU = 0
let nbY = 0

console.log(`${txt}\n`) // affichage du texte
txtlc = txt.toLowerCase() // transformation de toutes les majuscules dans le texte en minuscule

// boucle d'incrémentation pour traiter tous les caractères du texte
for (let ivyl = 0; ivyl < txtlc.length; ++ivyl) {
  // comparateur des caractéres par rapport à ceux rechercher et comptage des voyelles par incrémentation
  if (
    txtlc[ivyl] === 'a' ||
    txtlc[ivyl] === 'à' ||
    txtlc[ivyl] === 'ä' ||
    txtlc[ivyl] === 'â') {
    ++nbA
  } else if (txtlc[ivyl] === 'e' ||
    txtlc[ivyl] === 'é' ||
    txtlc[ivyl] === 'è' ||
    txtlc[ivyl] === 'ê') {
    ++nbE
  } else if (txtlc[ivyl] === 'i' ||
    txtlc[ivyl] === 'ï' ||
    txtlc[ivyl] === 'î') {
    ++nbI
  } else if (txtlc[ivyl] === 'o' ||
    txtlc[ivyl] === 'ô' ||
    txtlc[ivyl] === 'ö') {
    ++nbO
  } else if (txtlc[ivyl] === 'u' ||
    txtlc[ivyl] === 'ù' ||
    txtlc[ivyl] === 'ü' ||
    txtlc[ivyl] === 'û') {
    ++nbU
  } else if (txtlc[ivyl] === 'y' ||
    txtlc[ivyl] === 'ÿ' ||
    txtlc[ivyl] === 'ŷ') {
    ++nbY
  }
  ++nbvyl
}

console.log(`Il y a ${nbvyl} voyelle(s) dans ce texte.`) // affichage du résultat

console.log(`nb E: ${nbE}`)
console.log(`nb A: ${nbA}`)
console.log(`nb I: ${nbI}`)
console.log(`nb O: ${nbO}`)
console.log(`nb U: ${nbU}`)
console.log(`nb Y: ${nbY}`)