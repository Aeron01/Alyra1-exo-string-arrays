// Programme de comptage de tous les voyelles dans un texte

let txt = 'Je suis le ténébreux, - le veuf, - l\'inconsolé,' + ' Le prince d\'Aquitaine à la tour abolie :' + ' Ma seule étoile est morte, - et mon luth constellé' + ' Porte le soleil noir de la Mélancolie.' + ' Dans la nuit du tombeau, toi qui m\'as consolé,' + ' Rends - moi le Pausilippe et la mer d\'Italie,' + ' La fleur qui plaisait tant à mon cœur désolé,' + ' Et la treille où le pampre à la rose s\'allie.' + ' Suis - je Amour ou Phébus ? ...Lusignan ou Biron ?' + ' Mon front est rouge encor du baiser de la reine;' + ' J\'ai rêvé dans la grotte où nage la sirène...' + ' Et j\'ai deux fois vainqueur traversé l\'Achéron;' + ' Modulant tour à tour sur la lyre d\'Orphée' + ' Les soupirs de la sainte et les cris de la fée.'
let nbe = 0 // initialisation du compteur des voyelles

console.log(`${txt}\n`) // affichage du texte
txtlc = txt.toLowerCase() // transformation de toutes les majuscules dans le texte en minuscule

// boucle d'incrémentation pour traiter tous les caractères du texte
for (let nbe0 = 0; nbe0 < txtlc.length; ++nbe0) {
  // comparateur des caractéres par rapport à ceux rechercher et comptage des voyelles par incrémentation
  if (txtlc[nbe0] === 'a' || txtlc[nbe0] === 'e' || txtlc[nbe0] === 'i' || txtlc[nbe0] === 'o' || txtlc[nbe0] === 'u' || txtlc[nbe0] === 'y')
    nbe++
}

console.log(`Il y a ${nbe} voyelle(s) dans ce texte.`) // affichage du résultat