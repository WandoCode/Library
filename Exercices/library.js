const myLibrary = []

let read = document.getElementById('read')
let not_read = document.getElementById('not-read')
let formulaire = document.getElementById('btn')
let title = document.getElementById('title')
let author = document.getElementById('author')
let page = document.getElementById('page')

function Books(title, author, page, statut) {
    if (read.checked) {
        this.statut = read.value
    }
    if (not_read.checked) {
        this.statut = not_read.value
    }
    this.title = title
    this.author = author
    this.page = page
    this.statut = statut
    this.info = () => {
        return this.title + ' a été écrit par ' + this.author + '. Il contient ' + this.page + ". Vous " + this.statut
    }

}

formulaire.addEventListener('submit', (e) => {
    e.preventDefault()
    let newBook = Books(title.value, author.value, page.value, statut.value)
    myLibrary.push(newBook)
    console.log(myLibrary)
    console.log(newBook)
})