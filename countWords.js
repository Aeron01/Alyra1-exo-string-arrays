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

/* Ma solution
console.log(`${txt}\n\n`)

let countW = 0
let splttxt = txt.split(" ")
for (let count = 0; count < splttxt.length; ++count) {
  ++countW
} console.log(`Ce sonnet contient ${countW} mots.`)*/

// Correction
txt = txt.replaceAll('\n', ' ')
let tab = txt.split(' ')
console.log(`Le nombre de mot est ${tab.length}.`)