let intro = 'Salammbô est un roman historique de Gustave Flaubert, paru le 24 novembre 1862\n' + 'chez Michel Lévy frères.\n' + 'Il a pour sujet la guerre des Mercenaires, IIIe siècle av.J.- C., qui opposa\n' + 'la ville de Carthage aux mercenaires barbares qu’elle avait employés pendant\n' + 'la première guerre punique, et qui se révoltèrent, furieux de ne pas avoir\n' + 'reçu la solde convenue.'
let introc = intro.length
console.log(intro)
console.log('')
console.log(`Cette introduction contient ${introc} caractères.`)
console.log('')
let txt = "C'était à Mégara, faubourg de Carthage, dans les jardins d'Hamilcar."
for (let ch = 0; ch < txt.length; ++ch) {
  console.log(`Le caractère ${txt[ch]} est à l'index ${ch}`)
}