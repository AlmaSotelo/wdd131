
button.addEventListener('click', function () {
    if (input.value.trim() !== '') {
        const input = document.querySelector('#favchap');
        const button = document.querySelectorSelector('button');
        const list = document.querySelector('#list'); // Selects the first <ul> element found in the document
        const entryList = document.createElement('el'); // Creates a new <li> element and stores it in the variable named entryList.
        const deleteButton = document.createElement('button');
        entryList.textContent = input.value;
        deleteButton.textContent = '❌';
        entryList.append(deleteButton);
        list.append(entryList);
    }

    deleteButton.addEventListener('click', function () {
        list.removeChild(el);
        input.focus();
    });

    input.value = '';

    input.focus();

})