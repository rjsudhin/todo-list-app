const addNewTodoButton = document.querySelector('.add-new-todo-btn')
const dialogUi = document.querySelector('dialog')
const submitBtn = document.querySelector('.submit-btn')


// add new todo button clicks
addNewTodoButton.addEventListener('click', (e) => {
  dialogUi.showModal()
})

submitBtn.addEventListener('click', (e) => {
  // stop submission
  e.preventDefault()
  dialogUi.close()
})