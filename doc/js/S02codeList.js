const prevDisplayID = sessionStorage.getItem("displayID");
sessionStorage.setItem("displayID", "S02");
const PREV_PAYMENT = "S03";

fetch('../html/S02codeList.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('code-list-container').innerHTML = html;

    document.addEventListener('click', (e) => {
      const clickedElement = e.target;
      if (clickedElement.id === 'code-list-close-btn') {
        if (prevDisplayID === PREV_PAYMENT) {
          document.getElementById('payment-list').style.display = 'none'
        }

        document.getElementById('code-list-modal').style.display = 'none'
        document.getElementById('code-list-container').style.display = 'none'
      }
    });
});
