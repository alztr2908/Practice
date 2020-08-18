// Elements
const newBtn = document.querySelector('#addForm')
const itemList = document.querySelector('#item-list')
const searchItem = document.querySelector('#search-items')

// AddEventListener
newBtn.addEventListener('submit',addItem)
itemList.addEventListener('click',deleteItem)
searchItem.addEventListener('keyup',filterItem)


// Functions
function addItem(e) {
  e.preventDefault()

  var willDisappear = document.querySelector('#willDisappear')
  var newItemValue = document.querySelector('#new-items')
  var li = document.createElement('li')
  
  li.classList = 'item'
  var newItem = document.createElement('p')
  newItem.appendChild(document.createTextNode(newItemValue.value))
  var deleteBtn = document.createElement('button')
  deleteBtn.classList = 'delete'
  deleteBtn.appendChild(document.createTextNode('X'))

  li.appendChild(newItem)
  li.appendChild(deleteBtn)
  itemList.appendChild(li)

  willDisappear.style.display = 'none'

  newItemValue.value = ''
}

function deleteItem(e) {
  if(e.target.classList.contains('delete')) {
      var li = e.target.parentElement
      itemList.removeChild(li)
  }
}

function filterItem(e) {
  var text = e.target.value.toLowerCase()
  var items = itemList.getElementsByTagName('li')
  Array.from(items).forEach(function(item) {
    var itemName = item.firstChild.textContent
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  })
}
