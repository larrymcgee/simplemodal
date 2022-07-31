
var modal = document.getElementById('simpleModal');
var modalBtn = document.getElementById('modalBtn');
var closeBtn = document.getElementById('closeBtn');
var okBtn = document.getElementById('okBtn');

var dataArray = [
    {asset_tag: '1003240', label: '', description: 'Chromebook', serial: 'CVA3Y5'},
    {asset_tag: '1003241', label: '', description: 'Chromebook', serial: 'CVA3Y5'},
    {asset_tag: '1003242', label: '', description: 'Chromebook', serial: 'CVA3Y5'},
    {asset_tag: '1003243', label: '', description: 'Chromebook', serial: 'CVA3Y5'},
    {asset_tag: '1003244', label: '', description: 'Chromebook', serial: 'CVA3Y5'},
];

closeBtn.addEventListener('click', closeModal);
modalBtn.addEventListener('click', openModal);
window.addEventListener('click', clickOutside);
okBtn.addEventListener('click', updateTable);
// okBtn.addEventListener('click', console.log('hello world'));

function openModal() {
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

function clickOutside(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}




function buildTable(array, rows) {
    var table = document.getElementById('myTable');
    table.innerHTML = '';
    // var numRows = array.length;
    for (var i = 0; i < rows; i++) {
        var row = `
        <tr>
            <td><input type="checkbox"></td>
            <td>${array[i].asset_tag}</td>
            <td>${array[i].label}</td>
            <td>${array[i].description}</td>
            <td>${array[i].serial}</td>
        </tr>`;
        table.innerHTML += row;
    }
}

function updateTable() {
    buildTable(dataArray, 2);
}