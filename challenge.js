// Programme de decriptage code césear (fini le 19 février 2021 à 11h56)

let str = 'YRMV PFL VMVI YRU R UIVRD EVF KYRK PFL NVIV JF JLIV NRJ IVRC NYRK ZW PFL NVIV LERSCV KF NRBV WIFD KYRK UIVRD YFN NFLCU PFL BEFN KYV UZWWVIVETV SVKNVVE KYV UIVRD NFICU REU KYV IVRC NFICU'
let key = 1 // Max 25 - Min 1 car le code césare a que 26 posibilitée
let poss1 = 25 // Max 25 - Min 1 car le code césare a que 26 posibilitée

if ((key > 0 && key < 26) && (poss1 > 0 && poss1 < 26)) { // Vérifie que les donnés key et poss1 ne dépasse pas le valeur min et/ou max 
  for (let psblty = key; psblty <= poss1; psblty++) { // Incrémentation de décalage qui est programable 

    let decipher = ''; // Création d'une nouvelle string nomer decipher
    for (let i = 0; i < str.length; i++) { // Début de la bloucle de décodage par incrémentation sur la longeur de la string
      let tascii  // Création de la donnée tascii
      if (str[i] !== ' ') { // !== ' ' veut dire si pas egale a un espace c'est un caractères
        tascii = str.charCodeAt(i) + psblty // Transcription du caractères en ascii et incrémente de 1  
        if (tascii > 90) // Si le caractère+incrément l'ascii dépasse 90
          decipher += String.fromCharCode(tascii - 26) // Il le fait repasser a 65 et rajoute le reste del'incrémemt pour donner le code ascii correspondant
        else
          decipher += String.fromCharCode(tascii) // Donne le code ascii correspondant (et donc change le carractère)
      }
      else {
        decipher += ' ' // Si c'est un espace il mettra un espace
      }
    }
    console.log(`Décalage de ${psblty}\n${decipher}\n`) // Affiche une string, quelle est le décalage et le message de ce décalage
  }
} else if ((key < 0 || key > 26) || (poss1 < 0 || poss1 > 26)) { // Si l'une et/ou les deux donées dépasse l'une des valeur min et/oi max affiche ce message
  console.log(`Il est impossible de faire le décriptage, car l'une des deux données est supérieur à 25 ou inférieur à 1.`)
}

/* Merci à notre collègue Jonhatan Tondelier, pour sa solution qu'il a partager dans Discord,
dans la salle rouge, que j'ai reproduit et modiffié. */