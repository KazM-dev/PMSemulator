import { BTN } from '../consts.js';
import { hide, getElement, showFlex } from '../utils/domUtils.js';
import { isClickedBtn } from '../utils/eventUtile.js';

export function initCodeAndNum() {
  const codeListBtn = getElement('codeList-open-btn');
  codeListBtn.addEventListener('click', () => {
    if (isClickedBtn(BTN.PAYMENT)) {
      hide(getElement('post-list'));
      showFlex(getElement('payment-list'));
    } else if (isClickedBtn(BTN.POST)) {
      hide(getElement('payment-list'));
      showFlex(getElement('post-list'));
    }
  });
}