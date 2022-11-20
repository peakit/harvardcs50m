const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  const li = document.createElement("li")
  li.setAttribute("class", classNames.TODO_ITEM)
  
  // checkbox
  const chkbox = document.createElement("input")
  chkbox.setAttribute("type", "checkbox")
  chkbox.setAttribute("class", classNames.TODO_CHECKBOX)
  chkbox.setAttribute("onclick", "updateCount(this)")
  
  // TODO text
  const todoText = document.createElement("input")
  todoText.setAttribute("type", "texfield")
  todoText.setAttribute("class", classNames.TODO_TEXT)
  todoText.setAttribute("editable", true)

  // Delete TODO button
  const del = document.createElement("input")
  del.setAttribute("type", "button")
  del.setAttribute("class", classNames.TODO_DELETE)
  del.setAttribute("value", "Delete!")
  del.setAttribute("onclick", "delTODO(this)")

  li.appendChild(chkbox)
  li.appendChild(todoText)
  li.appendChild(del)
  list.appendChild(li)
  incrementCounts()
}

function incrementCounts() {
  totalCount = itemCountSpan.textContent
  totalCount++
  itemCountSpan.textContent = totalCount

  uncheckedCount = uncheckedCountSpan.textContent
  uncheckedCount++
  uncheckedCountSpan.textContent = uncheckedCount
}

function updateCount(element) {
  if (element.checked) {
    // that means it was unchecked earlier, so
    uncheckedCount--
    uncheckedCountSpan.textContent = uncheckedCount
  } else {
    // that means it was checked earlier, so
    uncheckedCount++
    uncheckedCountSpan.textContent = uncheckedCount
  }
}

function delTODO(element) {
  decrementCounts(element)
  element.parentElement.remove()
}

function decrementCounts(element) {
  totalCount = itemCountSpan.textContent
  totalCount--
  itemCountSpan.textContent = Math.max(totalCount, 0)

  uncheckedCount = uncheckedCountSpan.textContent
  uncheckedCount--
  uncheckedCountSpan.textContent = Math.max(uncheckedCount, 0)
}