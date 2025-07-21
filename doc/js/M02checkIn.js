document.addEventListener('click', (e) => {
    const clickedElement = e.target;
    if (clickedElement.closest('.base-table td')) {
        const table = document.getElementById('base-table');
        const row = clickedElement.closest('td').closest('tr');

        table.querySelectorAll('tr').forEach(row => {
            row.querySelectorAll('td').forEach(cell => {
                cell.classList.remove('table-highlight');
            });    
        });

        row.querySelectorAll('td').forEach(cell => {
            cell.classList.add('table-highlight');
        });
    }
});