// let gameboard = {}
// let game = {}

// const player = (sign) => {
//     const getSign = () => {
//         return sign
//     }
//     return { getSign }
// }

// const gameBoard = (() => {
//     const board = ["", "", "", "", "", "", "", "", "",]
//     const setField = (index, sign) => {
//         if (index > board.length) { return } //si l'index est plus grand que la taille du tableau, alors on return sans rien faire
//         board[index] = sign
//     }
//     const getField = (index) => {
//         if (index > board.length) { return }
//         return board[index]
//     }
//     // lorsqu'on clic sur rest, on remet tout à 0 => faire une boucle qui remet chaque entrée du board à 0
//     const reset = () => {
//         for (i = 0; i > board.length; i++) {
//             board[i] = ""
//         }
//     }
//     return { setField, getField, reset }
// })()
// const gameController = () => {
//     const playerX = player("X")
//     const playerO = player("O")
//     const round = 1
//     //creer une constante qu'on incrémente à chaque clic, si le modulo === 1, c'est impaire, on joue le tour de playerX ou O, et inversement
//     // const playerTurn = () => {
//     //     round++
//     // }
//     const getPlayerSign = () => { //nous donne X ou O en fonction du tour, change à cahque tour
//         if (round % 2 === 1) {

//             return playerO.getSign()
//         } else {

//             return playerX.getSign()
//         }
//     }
// }

//    const fieldTest = document.getElementById("test")
// fieldTest.addEventListener("click", () => {
//     fieldTest.textContent = gameController.getPlayerSign()
// })



//Au clic, ajoute un X



// Créer 2 joueurs, un avec sign = O, et un = X
// Trouver un moyen d'alterner entre player 1 et 2 à chaque clic sur une case
// const fieldTest = document.getElementById("test")
// const playerChange = (loc) => {
//     let round = 0
//     const player = ()=>{

//         if(round % 2 ===  1 ){
//             loc.addEventListener("click", () => {
//                 loc.textContent = "X"

//             })

//         }else{
//             loc.addEventListener("click", () => {
//                 loc.textContent = "O"

//             })
//         }
//     }
//     round++
// return player()
// }

// playerChange(fieldTest)
const fieldTest = document.getElementById("test")
const playerChange = () => {
    let round = 1
    let sign = ""
    round++
const player = ()=> {

    if (round % 2 === 1) {
        
        return sign = "X"
        
        
    } else {
        
        return sign = "O"
        
    }
}
round++
return player()
        

}
playerChange()
console.log(playerChange())

fieldTest.addEventListener("click", () => {
    playerChange()
    fieldTest.textContent = playerChange()

})
