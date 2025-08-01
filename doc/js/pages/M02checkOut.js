import { getElement, selector, isCContains, showFlex, setHeaderSStr } from "../utils/domUtils.js";
import { WINDOW_S } from "../consts.js";

export function initCheckOut() {
    const checkOutBtn = getElement('checkOut-btn');
    checkOutBtn.addEventListener('click', () => {
        const table = selector('.checkOut .base-table');
        table.querySelectorAll('tr').forEach(row => {
            if (isCContains(row.cells[0], 'table-highlight')) {
                showFlex(getElement('billing-modal'));
                showFlex(getElement('billing-container'));
                setHeaderSStr(WINDOW_S.BILLING);
            };
        });
    });
}