import { getElement, selector, showFlex } from '../utils/domUtils.js';
import { WINDOW_S, HEADER_S_STR } from '../consts.js';

export function initOption() {
    const receiptBtn = getElement('inputForm-receipt-open-btn');
    receiptBtn.addEventListener('click', () => {
        const windowHeader = selector('.inputForm .window-header');
        const displayString = HEADER_S_STR[WINDOW_S.INPUTFORM].ReceiptNameChange;
        windowHeader.textContent = displayString;
        showFlex(getElement('select-window'));
    });
};