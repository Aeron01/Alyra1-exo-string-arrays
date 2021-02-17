// Programme de comptage de toutes les lettres 'e' dans un texte

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
let nbe = 0 // Initialisation du compteur de 'e'.

console.log(`${txt}\n`) // Affichage du texte.

for (let i = 0; i < txt.length; ++i) { // Boucle d'incrémentation pour traiter tous les caractères du texte.
  // Comparateur des caractéres et comptage des 'e' par incrémentation
  if (txt[i] === 'e')
    nbe++
}

console.log(`Il y a ${nbe} 'e' dans ce texte.`) //Affichage du résultat.