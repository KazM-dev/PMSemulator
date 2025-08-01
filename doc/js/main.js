import { PAGEID } from './consts.js';
import { initHeader } from './utils/headerUtils.js';
import { initWindowDisplay, loadSubWindowHTMLs } from './utils/windowDisplay.js';
import { initWindowDrag } from './utils/windowHeaderDrag.js';
import { setHeaderMStr } from './utils/domUtils.js';

initHeader();
initWindowDisplay();
initWindowDrag();

(async () => {
  const pageId = document.body.dataset.page;
  switch (pageId) {
    case PAGEID.INDEX:
      break;
      
    case PAGEID.CHECKIN:
      setHeaderMStr(pageId);
      import('./utils/tableUtils.js').then(module => module.initTable());
      break;
      
    case PAGEID.CHECKOUT:
      setHeaderMStr(pageId);
      await loadSubWindowHTMLs(pageId);
      import('./utils/tableUtils.js').then(module => module.initTable());
      import(`./pages/${PAGEID.CHECKOUT}.js`).then(module => module.initCheckOut());
      import(`./pages/${PAGEID.BILLING}.js`).then(module => module.initBilling());
      import(`./pages/${PAGEID.CODEANDNUM}.js`).then(module => module.initCodeAndNum());
      import(`./pages/${PAGEID.OPTION}.js`).then(module => module.initOption());
      break;  
      
    case PAGEID.SEARCHRSV:
      setHeaderMStr(pageId);
      import('./utils/tableUtils.js').then(module => module.initTable());
      break;  
      
    default:
      console.warn("No page module found for:", pageId);
    }
})();
