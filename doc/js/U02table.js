const displays = ["checkIn", "checkOut", "searchRSV", "billing", "code-list"];
let clickedDisplay = "";

document.body.addEventListener('click', (e) => {
    const td = e.target.closest('td');
    if (!td) return;
    
    const clickedWindow = td.closest('.window');
    for (const display of displays) {
        if (clickedWindow.classList.contains(display)) {
            clickedDisplay = display;
            break;
        }
    }

    if (td.classList.contains('table-highlight')) {
        return;
    }

    const tables = clickedWindow.querySelectorAll(`.${clickedDisplay} .base-table`);
    tables.forEach(table => {
        table.querySelectorAll('tr').forEach(row => {
            row.querySelectorAll('td').forEach(cell => {
                cell.classList.remove('table-highlight');
            });
        });
    });

    const clickedRow = td.closest('tr');
    clickedRow.querySelectorAll('td').forEach(cell => {
        cell.classList.add('table-highlight');
    });
});
