// CRUD
// Create Rename Update Delete
// to do list

const input = document.querySelector('.text-input')
const btn = document.querySelector('.add-btn')
const ul = document.querySelector('.list')


btn.addEventListener('click', () => addNewList() )
input.addEventListener('keydown', (e) => {
    switch (e.key) {
        case "Enter" :
            addNewList()
            break;
        case "Delete" :
            input.value = ""
            break;
    }
})

function addNewList() {
    if (input.value !== "") {
        let newList = `<li class="list-group-item d-flex justify-content-between align-items-center">
    <span class="d-flex align-items-center">
    <input type="checkbox" class="mx-1">
${input.value}
</span>
<button class="del-btn btn btn-danger">delete</button>
</li>`
        ul.innerHTML += newList
    }
    input.value = ""
}



ul.addEventListener('click', (e) => {
    console.log(e.target.classList)
    if (e.target.classList.contains('del-btn')) {
        e.target.parentNode.remove()
    }
    if (e.target.classList.contains("check-box")){

// if (! e.target.parentNode.classList.contains("line")){
//     e.target.parentNode.classList.add("line")
// }else {
//     e.target.parentNode.classList.remove("line")
// }

        e.target.parentNode.classList.toggle("line")
    }
})

// const classes ={
//     li: "list-group-item d-flex justify-content-between align-items-center",
//     delBtn: "del-btn btn btn-danger",
//     span: "d-flex align-items-center",
//     checkBox: "check-box mx-1"
// }
//
// const {li, delBtn, span, checkBox} = classes
//
// function view(){
//     const tasks = JSON.parse(localStorage.getItem('task')) || []
//     console.log(tasks)
//
//     let allList = ""
//     tasks.map(el => {
//
//     })
// }