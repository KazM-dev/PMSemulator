import { getInnerHtml } from "../utils/domUtils.js";

export function initCodeList() {
  fetch('../html/S03codeList.html')
    .then(response => response.text())
    .then(html => {
      getInnerHtml('codeList-container', html);
  });
}