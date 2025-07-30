import { CONSTS } from '../consts.js';
import { observeElement } from '../utils/eventUtile.js';
import { getInnerHtml, selector, getElement, hide, showFlex } from '../utils/domUtils.js';

export function initBilling() {
  fetch('../html/S01billing.html')
    .then(response => response.text())
    .then(html => {
      getInnerHtml('billing-container', html);
      const elementArr = [selector("#codeAndNum-container"), ""];
      
      const paymentBtn = getElement('codeAndNum-payment-open-btn');
      paymentBtn.addEventListener('click', () =>{
        elementArr[1] = CONSTS.PAYMENT_STRING;
        observeElement(elementArr, (elementArr) => windowHeaderUpdate(elementArr));
        showFlex(getElement('select-window'));
        sessionStorage.setItem("clickedBtn", CONSTS.PAYMENT_BTN);
      });
      
      const postBtn = document.getElementById('codeAndNum-post-open-btn');
      postBtn.addEventListener('click', () =>{
        elementArr[1] = CONSTS.POST_STRING;
        observeElement(elementArr, (elementArr) => windowHeaderUpdate(elementArr));
        hide(getElement('select-window'));
        sessionStorage.setItem("clickedBtn", CONSTS.POST_BTN);
      });
  });
  
  function windowHeaderUpdate (elementArr) {
    const container = elementArr[0];
    const displayString = elementArr[1];
    const windowHeader = container.querySelector(".window-header");
    windowHeader.textContent = displayString;
  }
}