fetch('../html/S02codeAndNum.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('codeAndNum-container').innerHTML = html;
    const PAYMENT_BTN = "0";
    const POST_BTN = "1";

    const codeListBtn = document.getElementById('codeList-open-btn');
    codeListBtn.addEventListener('click', () => {
      
      if (isClickedBtn(PAYMENT_BTN)) {
        document.getElementById('post-list').style.display = 'none';
        document.getElementById('payment-list').style.display = 'flex';
      } else if (isClickedBtn(POST_BTN)) {
        document.getElementById('payment-list').style.display = 'none';
        document.getElementById('post-list').style.display = 'flex';
      }
    });
});

function isClickedBtn (clickedBtn) {
  return sessionStorage.getItem("clickedBtn") === clickedBtn;
}