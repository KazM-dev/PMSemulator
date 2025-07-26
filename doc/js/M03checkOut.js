sessionStorage.setItem("displayID", "M03");

document.addEventListener('click', (e) => {
    const clickedElement = e.target;
    if (clickedElement.closest('.base-table td')) {
        const table = clickedElement.closest('table');
        const row = clickedElement.closest('td').closest('tr');

        table.querySelectorAll('tr').forEach(row => {
            row.querySelectorAll('td').forEach(cell => {
                cell.classList.remove('table-highlight');
            });    
        });

        if (clickedElement.closest('.base-tables td')) {
            const clickedWindow = clickedElement.closest('.window');
            const clickedTable = clickedElement.closest('.base-table');
            clickedWindow.querySelectorAll('.base-table').forEach(table => {
                if (table !== clickedTable) {
                    table.querySelectorAll('tr').forEach(row => {
                        row.querySelectorAll('td').forEach(cell => {
                            cell.classList.remove('table-highlight');
                        });    
                    });
                }
            });
        }

        row.querySelectorAll('td').forEach(cell => {
            cell.classList.add('table-highlight');
        });
        
    } else if (clickedElement.id === 'checkOut-btn') {
        const table = document.getElementById('base-table');
        table.querySelectorAll('tr').forEach(row => {
            if (row.cells[0].classList.contains('table-highlight')) {
                document.getElementById('billing-modal').style.display = 'flex'
                document.getElementById('billing-container').style.display = 'flex'
            }
        });
    }
});