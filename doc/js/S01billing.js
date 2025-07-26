sessionStorage.setItem("displayID", "S01");

fetch('../html/S01billing.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('billing-container').innerHTML = html;

    document.addEventListener('click', (e) => {
      const clickedElement = e.target;
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
      } else if (clickedElement.id === 'payment-btn') {
        document.getElementById('payment-modal').style.display = 'flex'
        document.getElementById('payment-container').style.display = 'flex'
        document.getElementById('payment-list').style.display = 'flex'
        
      } else if (clickedElement.id === 'billing-close-btn') {
        document.getElementById('billing-modal').style.display = 'none'
        document.getElementById('billing-container').style.display = 'none'
      }
    });
});
