fetch('../html/S01billing.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('billing-container').innerHTML = html;

    const PAYMENT_BTN = "0";
    const POST_BTN = "1";
    const PAYMENT_STRING = "精算";
    const POST_STRING = "計上";
    let observeArr = [document.querySelector("#codeAndNum-container"), ""];
    
    const paymentBtn = document.getElementById('codeAndNum-payment-open-btn');
    paymentBtn.addEventListener('click', () =>{
      observeArr[1] = PAYMENT_STRING;
      observeChanging(observeArr, (observeArr) => windowHeaderUpdate(observeArr));
      document.getElementById('select-window').style.display = 'flex';
      sessionStorage.setItem("clickedBtn", PAYMENT_BTN);
    });
    
    const postBtn = document.getElementById('codeAndNum-post-open-btn');
    postBtn.addEventListener('click', () =>{
      observeArr[1] = POST_STRING;
      observeChanging(observeArr, (observeArr) => windowHeaderUpdate(observeArr));
      document.getElementById('select-window').style.display = 'none';
      sessionStorage.setItem("clickedBtn", POST_BTN);
    });
});

function observeChanging(observeArr, callback) {
  const observer = new MutationObserver(() => {
    if (getComputedStyle(element).display === 'flex') {
      callback(observeArr);
      observer.disconnect();
    }
  });
  element = observeArr[0];
  observer.observe(element, { attributes: true, attributeFilter: ['style', 'class'] });
}

function windowHeaderUpdate (observeArr) {
  const container = observeArr[0];
  const displayString = observeArr[1];
  windowHeader = container.querySelector(".window-header");
  windowHeader.textContent = displayString;
}