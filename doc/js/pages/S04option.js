import { getInnerHtml } from "../utils/domUtils.js";

export function initOption() {
  fetch('../html/S04option.html')
    .then(response => response.text())
    .then(html => {
      getInnerHtml('option-container', html);
  });
}