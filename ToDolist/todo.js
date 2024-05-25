let button
let createTodo
let pres
let showTodo
let d = document
let todo = d.getElementById('action')
let form = d.getElementById('form')
let noC = d.getElementById('nonCompl')
const myAction = [{ action: 'test', statut: 'not-completed' }]


function Todo(action) {
    this.action = action
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    var newAction = new Todo(todo.value)
    newAction.statut = 'not-completed'
    myAction.push(newAction)
    pres = d.createElement('div')
    pres.textContent = 'La tâche a été ajoutée avec succés'
    d.body.append(pres)
    // addTodo(newAction)
    console.log(myAction)

})

noC.addEventListener('click', (e) => {
    e.preventDefault()
    var element = $("div:contains('La tâche a été ajoutée avec succés')")
    var addBut = $("div:contains('des tâches à faire')")
    element.hide()
    addBut.hide()
    for (let i = 0; i < myAction.length; i++) {
        let todos = myAction[i]["action"]
        showTodo = d.createElement('div')
        showTodo.textContent = todos
        showTodo.id = myAction[i]["action"].split(' ').join('')
        d.body.append(showTodo)
        button = d.createElement('button')
        button.textContent = 'Supprimer de la liste'
        button.type = 'submit'
        button.id = myAction[i]["action"].split(' ').join('')
        d.getElementById(myAction[i]["action"].split(' ').join('')).append(button)
        console.log(todos)
    }

})



function addTodo(action) {
    createTodo = document.createElement('div')
    createTodo.id = action.action.split(' ').join('')
    createTodo.textContent = action.action
    document.body.append(createTodo)
    button = d.createElement('button')
    button.id = action.action.split(' ').join('')
    button.textContent = 'Supprimer de la liste'
    button.type = 'submit'
    d.getElementById(action.action.split(' ').join('')).append(button)
    removeTodo(action)
}


function removeTodo(action) {
    let rmTodo = d.getElementById(action.action.split(' ').join(''))
    console.log(rmTodo.id)
    rmTodo.addEventListener('click', (e) => {
        e.preventDefault()
        rmTodo.remove()
        myAction.splice(myAction.indexOf(rmTodo))
        console.log(myAction)
    })
}