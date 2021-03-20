input.onGesture(Gesture.LogoUp, function () {
    utilisateur.push("b")
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
    control.waitMicros(1000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
// Fonction réinitialisant les variables et l'écran (affiche OK)
function reinit () {
    utilisateur = []
    test = 0
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showString("OK")
    control.waitMicros(1000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
// Les boutons A, B  ou A+B réinitialise le "compteur"
input.onButtonPressed(Button.A, function () {
    reinit()
})
input.onGesture(Gesture.TiltRight, function () {
    utilisateur.push("d")
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
    control.waitMicros(1000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onGesture(Gesture.TiltLeft, function () {
    utilisateur.push("g")
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
    control.waitMicros(1000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    reinit()
})
input.onButtonPressed(Button.B, function () {
    reinit()
})
// Pour chaque position, une flèche est affichée à l'écran et la valeur correspondante est ajoutée au tableau.
input.onGesture(Gesture.LogoDown, function () {
    utilisateur.push("h")
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
    control.waitMicros(1000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
// Entrez ici le code du cadenas (chiffres ou lettres)
// Entrez également la combinaison des déplacements pour afficher le code du cadenas (g, d, h ou b pour gauche, droite, haut et bas)
// Les longueurs du code de cadenas et de la série de positions ne sont pas limitées.
//     
let test = 0
let utilisateur: string[] = []
let codecadenas = 5632
let solution = ["g", "b", "d", "d", "h"]
reinit()
// Quand le nombre de mouvements est égal au nombre attendu, on teste les diverses positions une à une avec ce qui est attendu.
basic.forever(function () {
    if (utilisateur.length == solution.length) {
        test = 0
        for (let index = 0; index <= utilisateur.length - 1; index++) {
            if (utilisateur[index] == solution[index]) {
                test += 1
            } else {
                test = 0
            }
        }
        if (test == utilisateur.length) {
            basic.showString("" + (codecadenas))
        } else {
            basic.showString("X")
        }
    }
})
