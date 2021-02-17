// Programme de comptage de tous les voyelles dans un texte

let txt = "Je suis le ténébreux, - le veuf, - l\'inconsolé,\n\
Le prince d\'Aquitaine à la tour abolie :\n\
Ma seule étoile est morte, - et mon luth constellé\n\
Porte le soleil noir de la Mélancolie.\n\
Dans la nuit du tombeau, toi qui m\'as consolé,\n\
Rends - moi le Pausilippe et la mer d\'Italie,\n\
La fleur qui plaisait tant à mon cœur désolé,\n\
Et la treille où le pampre à la rose s\'allie.\n\
Suis - je Amour ou Phébus ? ...Lusignan ou Biron ?\n\
Mon front est rouge encor du baiser de la reine;\n\
J\'ai rêvé dans la grotte où nage la sirène...\n\
Et j\'ai deux fois vainqueur traversé l\'Achéron;\n\
Modulant tour à tour sur la lyre d\'Orphée\n\
Les soupirs de la sainte et les cris de la fée."
let nbv = 0 // initialisation du compteur des voyelles

console.log(`${txt}\n`) // affichage du texte
txtlc = txt.toLowerCase() // transformation de toutes les majuscules dans le texte en minuscule

// boucle d'incrémentation pour traiter tous les caractères du texte
for (let voye = 0; voye < txtlc.length; ++voye) {
  // comparateur des caractéres par rapport à ceux rechercher et comptage des voyelles par incrémentation
  if (
    txtlc[voye] === 'a' ||
    txtlc[voye] === 'e' ||
    txtlc[voye] === 'i' ||
    txtlc[voye] === 'o' ||
    txtlc[voye] === 'u' ||
    txtlc[voye] === 'y' ||
    txtlc[voye] === 'à' ||
    txtlc[voye] === 'é' ||
    txtlc[voye] === 'è' ||
    txtlc[voye] === 'ê' ||
    txtlc[voye] === 'ï' ||
    txtlc[voye] === 'î' ||
    txtlc[voye] === 'ô' ||
    txtlc[voye] === 'ö' ||
    txtlc[voye] === 'ù' ||
    txtlc[voye] === 'ü' ||
    txtlc[voye] === 'û')
    nbv++
}

console.log(`Il y a ${nbv} voyelle(s) dans ce texte.`) // affichage du résultat