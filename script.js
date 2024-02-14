// Função para adicionar um item à lista
function addItem() {
  var itemInput = document.getElementById('itemInput');
  var quantityInput = document.getElementById('quantityInput');
  var itemText = itemInput.value.trim();
  var quantity = quantityInput.value.trim();
  
  if (itemText !== '') {
    // Capitaliza a primeira letra do texto do item
    itemText = itemText.charAt(0).toUpperCase() + itemText.slice(1);
    
    var itemList = document.getElementById('itemList');
    var newItem = document.createElement('li');
    newItem.innerHTML = '<span onclick="editItem(this)">' + itemText + '</span> <button onclick="markItem(this)">Comprado</button> <button onclick="removeItem(this)">Remover</button> <span>Qtd: ' + quantity + '</span>';
    itemList.appendChild(newItem);
    itemInput.value = '';
    quantityInput.value = ''; // Limpa o campo de quantidade após adicionar um item
    saveList(); // Salva a lista após adicionar um item
  } else {
    alert('Por favor, insira um item válido.');
  }
}

// Função para editar um item
function editItem(spanElement) {
  var text = spanElement.textContent;
  var editText = prompt('Editar item:', text);
  if (editText !== null) {
    spanElement.textContent = editText;
  }
}

// Função para marcar um item como comprado
function markItem(itemButton) {
  var itemSpan = itemButton.previousElementSibling.previousElementSibling;
  itemSpan.style.textDecoration = 'line-through';
  itemButton.textContent = 'Desmarcar';
  itemButton.setAttribute('onclick', 'unmarkItem(this)');
  saveList(); // Salva a lista após marcar um item
}

// Função para desmarcar um item como comprado
function unmarkItem(itemButton) {
  var itemSpan = itemButton.previousElementSibling.previousElementSibling;
  itemSpan.style.textDecoration = 'none';
  itemButton.textContent = 'Comprado';
  itemButton.setAttribute('onclick', 'markItem(this)');
  saveList(); // Salva a lista após desmarcar um item
}

// Função para remover um item da lista
function removeItem(itemButton) {
  var listItem = itemButton.parentElement;
  listItem.remove();
  saveList(); // Salva a lista após remover um item
}

// Função para salvar a lista atual no armazenamento local
function saveList() {
  var itemList = document.getElementById('itemList').innerHTML;
  localStorage.setItem('shoppingList', itemList);
}

// Função para carregar uma lista salva do armazenamento local
function loadList() {
  var itemList = localStorage.getItem('shoppingList');
  if (itemList) {
    document.getElementById('itemList').innerHTML = itemList;
  }
}

// Carrega a lista ao carregar a página
window.onload = loadList;
