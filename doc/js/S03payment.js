sessionStorage.setItem("displayID", "S03");

fetch('../html/S03payment.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('payment-container').innerHTML = html;

    document.addEventListener('click', (e) => {
      const clickedElement = e.target;
      if (clickedElement.id === 'code-list-btn') {
        document.getElementById('code-list-modal').style.display = 'flex'
        document.getElementById('code-list-container').style.display = 'flex'

      } else if (clickedElement.id === 'payment-close-btn') {
        document.getElementById('payment-modal').style.display = 'none'
        document.getElementById('payment-container').style.display = 'none'
      }
    });
});
