import { BTN } from '../consts.js';
import { WINDOW_S, HEADER_S_STR } from '../consts.js';
import { selector, getElement, hide, showFlex} from '../utils/domUtils.js';

export function initBilling() {
  const windowHeader = selector('.codeAndNum .window-header');

  const paymentBtn = getElement('codeAndNum-payment-open-btn');
  paymentBtn.addEventListener('click', () =>{
    const displayString = HEADER_S_STR[WINDOW_S.CODEANDNUM].PAYMENT;
    windowHeader.textContent = displayString;
    showFlex(getElement('select-window'));
    sessionStorage.setItem("clickedBtn", BTN.PAYMENT);
  });
  
  const postBtn = document.getElementById('codeAndNum-post-open-btn');
  postBtn.addEventListener('click', () =>{
    const displayString = HEADER_S_STR[WINDOW_S.CODEANDNUM].POST;
    windowHeader.textContent = displayString;
    hide(getElement('select-window'));
    sessionStorage.setItem("clickedBtn", BTN.POST);
  });
}