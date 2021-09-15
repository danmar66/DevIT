const add = document.querySelector('#btnInsert');
const remove = document.querySelector('#btnRemove');
const row = document.querySelector('#row');
const col = document.querySelector('#col');
const table = document.querySelector('table');


add.addEventListener('click', function() {
    let allRow = document.querySelectorAll('tr').length;
    let allCol = document.querySelectorAll('td').length;

    const tRow = document.createElement('tr');

    for(let i = 0; i < 2; i++) {
        const tCol = document.createElement('td');
        tCol.innerHTML = 'Row' + (allRow + 1) + 'cell' + (allCol + i + 1);
        tRow.append(tCol);
    }

    table.append(tRow);
})

remove.addEventListener('click', function() {
    let allRow = document.querySelectorAll('tr').length;

    table.innerHTML = '';

    for(let q = 0; q < allRow - 1; q++) {
        const tRow = document.createElement('tr');

        for(let i = 0; i < 2; i++) {
            const tCol = document.createElement('td');
            tCol.innerHTML = 'Row' + (q + 1) + 'cell' + (q + i + 1);
            tRow.append(tCol);
        }
        table.append(tRow);
    }

})
