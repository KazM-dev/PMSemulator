import { isCContains } from "./domUtils.js";

export function initTable() {
    document.body.addEventListener('click', (e) => {
        const td = e.target.closest('td');
        if (!td) return;
        if (isCContains(td, 'table-highlight')) return;
    
        const clickedWindow = td.closest('.window');
        clearTable(clickedWindow);
        
        const clickedRow = td.closest('tr');
        clickedRow.querySelectorAll('td').forEach(cell => {
            cell.classList.add('table-highlight');
        });
    });
    
    document.body.addEventListener('click', (e) => {
        if (!e.target.id.endsWith('close-btn')) return;
        const clickedWindow = e.target.closest('.window');
        clearTable(clickedWindow);
    });
    
    function clearTable(clickedWindow) {
        const tables = clickedWindow.querySelectorAll('.base-table');
        tables.forEach(table => {
            table.querySelectorAll('tr').forEach(row => {
                row.querySelectorAll('td').forEach(cell => {
                    cell.classList.remove('table-highlight');
                });
            });
            const radios = table.querySelectorAll('input[type="radio"]');
            if (radios) radios.forEach(radio => radio.checked = false);
        });
    }
}
