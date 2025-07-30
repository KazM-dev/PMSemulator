import { getInnerHtml, selectorAll, isEContains, getElement, hideAll, displayGroup } from './domUtils.js'

export function initHeader() {  
  fetch('../html/U01header.html')
    .then(response => response.text())
    .then(html => {
      getInnerHtml('header-container', html);
      const headerBtns = selectorAll('.header-btn');
      const headerMenus = selectorAll('.header-menu');

      document.body.addEventListener('click', (e) => {
        const clickedElement = e.target;
        if (!isEContains(clickedElement, headerBtns)) {
          return hideAll(headerMenus);
        }
        const clickedMenu = getElement(clickedElement.dataset.target);
        displayGroup(clickedMenu, headerMenus);
      });
    });
}
