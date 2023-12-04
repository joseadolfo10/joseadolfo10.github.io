const frases = [
    "Infor!",
    "Caneta azul, azul caneta",
    "Solte minha camisa."
  ];

  const demoParagraph = document.getElementById('demo');
  const title = document.getElementById('title');
  const changeTextButton = document.getElementById('changeText');
  const itemInput = document.getElementById('itemInput');
  const dateInput = document.getElementById('dateInput');
  const addItemButton = document.getElementById('addItem');
  const removeItemButton = document.getElementById('removeItem');
  const itemList = document.getElementById('itemList');

  changeTextButton.addEventListener('click', function() {
    const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
    demoParagraph.textContent = fraseAleatoria;
  });

  title.addEventListener('mouseover', function() {
    title.style.color = '#FF0000';
  });

  title.addEventListener('mouseout', function() {
    title.style.color = '#007BFF';
  });

  addItemButton.addEventListener('click', function() {
    const newItem = itemInput.value.trim();
    const newDate = dateInput.value;

    if (newItem !== '') {
      const listItem = document.createElement('li');
      listItem.classList.add('list-group-item');

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      listItem.appendChild(checkbox);

      const textSpan = document.createElement('span');
      textSpan.innerHTML = ` Item: ${newItem}, Data: ${newDate}`;
      listItem.appendChild(textSpan);

      itemList.insertBefore(listItem, itemList.firstChild);
      itemInput.value = '';
      dateInput.value = '';

      checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
          textSpan.classList.add('completed');
          itemList.appendChild(listItem);
        } else {
          textSpan.classList.remove('completed');
          itemList.insertBefore(listItem, itemList.firstChild);
        }
      });
    }
  });

  removeItemButton.addEventListener('click', function() {
    const lastItem = itemList.lastElementChild;

    if (lastItem) {
      itemList.removeChild(lastItem);
    }
  });