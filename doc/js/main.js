import { initHeader } from './utils/headerUtils.js';
import { initWindowDisplay } from './utils/windowDisplay.js';
import { initWindowDrag } from './utils/windowHeaderDrag.js';

const pageId = document.body.dataset.page;
initHeader();
initWindowDisplay();
initWindowDrag();

switch (pageId) {
  case "index":
    break;

  case "M01checkIn":
    import('./utils/tableUtils.js').then(module => module.initTable());
    break;

  case "M02checkOut":
    import('./utils/tableUtils.js').then(module => module.initTable());
    import('./pages/M02checkOut.js').then(module => module.initCheckOut());
    import('./pages/S01billing.js').then(module => module.initBilling());
    import('./pages/S02codeAndNum.js').then(module => module.initCodeAndNum());
    import('./pages/S03codeList.js').then(module => module.initCodeList());
    import('./pages/S04option.js').then(module => module.initOption());
    break;  
    
  case "M03searchRSV":
    import('./utils/tableUtils.js').then(module => module.initTable());
    break;  

  default:
    console.warn("No page module found for:", pageId);
}
