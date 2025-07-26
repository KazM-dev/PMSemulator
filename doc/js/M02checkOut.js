const checkOutBtn = document.getElementById('checkOut-btn');
checkOutBtn.addEventListener('click', () => {
    const table = document.querySelector('.checkOut .base-table');
    table.querySelectorAll('tr').forEach(row => {
        if (row.cells[0].classList.contains('table-highlight')) {
            document.getElementById('billing-modal').style.display = 'flex';
            document.getElementById('billing-container').style.display = 'flex';
        };
    });
});