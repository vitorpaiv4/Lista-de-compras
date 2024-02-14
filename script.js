function addItem() {
    var itemInput = document.getElementById('itemInput');
    var itemText = itemInput.value.trim();
    
    if (itemText !== '') {
      var itemList = document.getElementById('itemList');
      var newItem = document.createElement('li');
      newItem.innerHTML = '<span>' + itemText + '</span> <button onclick="markItem(this)">Comprado</button> <button onclick="removeItem(this)">Remover</button>';
      itemList.appendChild(newItem);
      itemInput.value = '';
    } else {
      alert('Por favor, insira um item válido.');
    }
  }
  
  function markItem(itemButton) {
    var itemSpan = itemButton.previousElementSibling;
    itemSpan.style.textDecoration = 'line-through';
    itemButton.textContent = 'Desmarcar';
    itemButton.setAttribute('onclick', 'unmarkItem(this)');
  }
  
  function unmarkItem(itemButton) {
    var itemSpan = itemButton.previousElementSibling;
    itemSpan.style.textDecoration = 'none';
    itemButton.textContent = 'Comprado';
    itemButton.setAttribute('onclick', 'markItem(this)');
  }
  
  function removeItem(itemButton) {
    var listItem = itemButton.parentElement;
    listItem.remove();
  }
  