import { CONSTS } from '../consts.js';
import { getInnerHtml, hide, getElement, showFlex } from '../utils/domUtils.js';
import { isClickedBtn } from '../utils/eventUtile.js';

export function initCodeAndNum() {
  fetch('../html/S02codeAndNum.html')
    .then(response => response.text())
    .then(html => {
      getInnerHtml('codeAndNum-container', html);
      const codeListBtn = getElement('codeList-open-btn');
      codeListBtn.addEventListener('click', () => {
        
        if (isClickedBtn(CONSTS.PAYMENT_BTN)) {
          hide(getElement('post-list'));
          showFlex(getElement('payment-list'));
        } else if (isClickedBtn(CONSTS.POST_BTN)) {
          hide(getElement('payment-list'));
          showFlex(getElement('post-list'));
        }
      });
  });
}