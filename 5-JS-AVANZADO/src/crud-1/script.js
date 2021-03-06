'use strict'

/*
PARA ESTE CASO ESPECIFICO
    CREATE -> POST
    READ -> GET
    UPDATE -> PUT
    DELETE -> DELETE
*/
const d = document

const input_todo = d.getElementById('input-todo')

const btn_add = d.getElementById('btn-add')

const content_w = d.getElementById('content-wrapper')

const URL = 'http://localhost:3000/data/'

//crear los li en el DOM
const printTasks = (task, id) => {

    let li = d.createElement('li')
    li.dataset.id = id
    li.textContent = task

    const btn_1 = d.createElement('button')
    const btn_2 = d.createElement('button')
    btn_1.textContent = 'Editar'
    btn_2.textContent = 'Eliminar'

    btn_1.addEventListener('click', () => {
        updateData(input_todo.value, id)
    })

    btn_2.addEventListener('click', () => {
        deleteData(id)
    })

    li.append(btn_1, btn_2)
    content_w.appendChild(li)

}

//hacer una peticion GET a la URL base y con ayuda de printTasks, imprimir en el DOM la info dinamica
const getData = () => {
    fetch(URL)
        .then(response => response.json())
        .then(data => {
            data.forEach(element => {
                printTasks(element.task, element.id)
            });
        })
        .catch(error => console.error(error))
}
getData()

//Hace una peticion POST, se ejecuta cuando creo un elemento nuevo
const sendData = (data) => {
    fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
        },
        body : JSON.stringify({
            "task" : `${data}`
        })
    })
    .then(response => response.json())
    .then(data => console.log(data))
}

//Hace una peticion PUT, se ejecuta porque està guardado en el botòn de editar que se crea con la funcion printTasks
const updateData = (task, id) => {
    fetch(URL + id, {
        method: 'PUT',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify( { "task" : `${task}` } )
    })
    .then(response => response.json())
    .then(data => console.log(data))
}

//Hace una peticion DELETE, se ejecuta porque està guardado en el botòn de eliminar que se crea con la funcion printTasks
const deleteData = (id) => {
    fetch(URL + id, {
        method: 'DELETE',
        headers: {
            'Content-Type' : 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => console.log(data))
}

btn_add.addEventListener('click', (e) => {
    sendData(input_todo.value)
})



