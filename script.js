
function addItem() {
  var itemInput = document.getElementById('itemInput');
  var quantityInput = document.getElementById('quantityInput');
  var unitSelect = document.getElementById('unitSelect');
  var itemText = itemInput.value.trim();
  var quantity = quantityInput.value.trim();
  var unit = unitSelect.value;
  
  if (itemText !== '' && quantity !== '') {
    // Capitaliza a primeira letra do texto do item
    itemText = itemText.charAt(0).toUpperCase() + itemText.slice(1);
    
    var itemList = document.getElementById('itemList');
    var newItem = document.createElement('li');
    newItem.innerHTML = '<span onclick="editItem(this)">' + itemText + '</span> <span onclick="editQuantity(this)">' + quantity + ' ' + unit + '</span> <button onclick="markItem(this)">Comprado</button> <button onclick="removeItem(this)">Remover</button>';
    itemList.appendChild(newItem);
    itemInput.value = '';
    quantityInput.value = ''; // Limpa o campo de quantidade após adicionar um item
    saveList(); // Salva a lista após adicionar um item
  } else {
    alert('Por favor, insira um item e uma quantidade válidos.');
  }
}


function editQuantity(spanElement) {
  var text = spanElement.textContent;
  var editQuantity = prompt('Editar quantidade:', text);
  if (editQuantity !== null) {
    var unitIndex = text.indexOf(' '); // Encontra o índice do espaço em branco entre a quantidade e a unidade
    var quantity = editQuantity.trim();
    var unit = text.substring(unitIndex + 1); // Obtém a unidade atual do texto
    spanElement.textContent = quantity + ' ' + unit;
    saveList(); // Salva a lista após editar a quantidade
  }
}

function editItem(spanElement) {
  var text = spanElement.textContent;
  var editText = prompt('Editar item:', text);
  if (editText !== null) {
    spanElement.textContent = editText;
    saveList(); // Salva a lista após editar um item
  }
}

function markItem(itemButton) {
  var listItem = itemButton.parentElement;
  var itemSpan = listItem.querySelector('span');
  itemSpan.style.textDecoration = 'line-through';
  itemButton.textContent = 'Desmarcar';
  itemButton.setAttribute('onclick', 'unmarkItem(this)');
  saveList(); // Salva a lista após marcar um item
}

function unmarkItem(itemButton) {
  var listItem = itemButton.parentElement;
  var itemSpan = listItem.querySelector('span');
  itemSpan.style.textDecoration = 'none';
  itemButton.textContent = 'Comprado';
  itemButton.setAttribute('onclick', 'markItem(this)');
  saveList(); // Salva a lista após desmarcar um item
}

function removeItem(itemButton) {
  var listItem = itemButton.parentElement;
  listItem.remove();
  saveList(); // Salva a lista após remover um item
}

function saveList() {
  var itemList = document.getElementById('itemList').innerHTML;
  localStorage.setItem('shoppingList', itemList);
}

function loadList() {
  var itemList = localStorage.getItem('shoppingList');
  if (itemList) {
    document.getElementById('itemList').innerHTML = itemList;
  }
}

window.onload = loadList;
