const myLibrary = []

let auteur = document.getElementById('author')//on selectionne les données du formulaire
let titre = document.getElementById("title")
let pages = document.getElementById("pages")
let formulaire = document.getElementById('contact-form')//on selectionne le formulaire
let createBook


//pour creer un nouveau livre
function Books(title, author, pages, read) {

  if (document.getElementById('read').checked) {
    read = document.getElementById('read').value
  } else if (document.getElementById('not-read').checked) {
    read = document.getElementById('not-read').value
  }
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = () => {
    return this.title + ' par ' + this.author + ', ' + this.pages + ' pages ' + this.read
  }
}



formulaire.addEventListener('submit', (e) => {
  e.preventDefault()//empeche le rechargement de la page apres envois du formualire
  let newBook = new Books(titre.value, auteur.value, pages.value, read.value)
  addBook(newBook)
  myLibrary.push(newBook)
  document.getElementById('contact-form').reset()//on remet le formulaire à 0 (suur l'ecran) une fois qu'il a cliqué sur le bouton et que le livre est ajouté
})

function addBook(book) {
  //Permet d'ajouter les info du livre et un boutton pour effacer le livre
  //affichage du livre
  //.split(' ').join('') enleve les espace du titre(car pas d'espace dans un id)
  createBook = document.createElement('div')

  createBook.id = book.title.split(' ').join('')
  createBook.textContent = book.info()
  document.body.append(createBook)

  //boutton pour effacer le livre de l'ecran
  let button = document.createElement('button')
  button.textContent = 'Efface moi'
  button.id = `rm-${book.title.split(' ').join('')}`
  button.type = 'submit'
  document.querySelector(`#${book.title.split(' ').join('')}`).append(button)
  removeBook(book)

  //creer un bouton pour passer de non lu à lu si le bouquin n'est pas deja lu
  
  if(book.read === 'pas lu'){
    let toggle = document.createElement('button')
  toggle.textContent = "Ca y est, je l'ai lu"
  toggle.id = `tg-${book.title.split(' ').join('')}`
  toggle.type = "submit"
  document.querySelector(`#${book.title.split(' ').join('')}`).append(toggle)
    toogleRead(book)
  }

  console.log(myLibrary);
}

function arrayObjectIndexOf(tableau, searchTerm, title) {
  //Permet de trouver l'index d'un element dans le tableau en fct d'une propriété (ici titre), pour ensuite le supprimer
  for (var i = 0, len = tableau.length; i < len; i++) {
    if (tableau[i][title] === searchTerm) return i;
  }
  return -1;
}

function removeBook(book) {
  let rmBook = document.getElementById(`rm-${book.title.split(' ').join('')}`)
  rmBook.addEventListener('click', (e) => {
    e.preventDefault()
    rmBook.remove()
    createBook.remove()
    myLibrary.splice(myLibrary.indexOf(book.title.split(' ').join('')))//supprime 1 element apd l'index du livre à supprimer
    console.log(myLibrary);

  })
}

function toogleRead(book) {
  //modifier le book, de pas lu, en lu si je clic sur le bouton, et je modifier le html de pas lu en lu
  let tglBook = document.getElementById(`tg-${book.title.split(' ').join('')}`)
  tglBook.addEventListener('click', (e) => {
    e.preventDefault()
    if (book.read === 'pas lu') {
      book.read = 'lu'
      createBook.textContent = book.info()
      let button = document.createElement('button')
  button.textContent = 'Efface moi'
  button.id = `rm-${book.title.split(' ').join('')}`
  button.type = 'submit'
  document.querySelector(`#${book.title.split(' ').join('')}`).append(button)
  removeBook(book)
    }
    console.log(myLibrary);
  })

}






