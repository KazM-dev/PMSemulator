import { WINDOW_M, WINDOW_S, PAGEID } from '../consts.js';
import { matchMapStartWithId, getElement, hide, showFlex, getInnerHtml, setHeaderSStr} from './domUtils.js'

export function initWindowDisplay () {        
    document.body.addEventListener('click', (e) => {
        const clickedElement = e.target; 
        if (!clickedElement.matches('[id$="-close-btn"]')) return;
        if(matchMapStartWithId(clickedElement.id, WINDOW_M)) return window.close();
        
        const matchSubWindow = matchMapStartWithId(clickedElement.id, WINDOW_S);
        if (!matchSubWindow) return;
        hide(getElement(`${matchSubWindow}-modal`));
        hide(getElement(`${matchSubWindow}-container`));
    });
    
    document.body.addEventListener('click', (e) => {
        const clickedElement = e.target; 
        if (!clickedElement.matches('[id$="-open-btn"]')) return;
        const matchMainWindow = matchMapStartWithId(clickedElement.id, WINDOW_M);
        if (matchMainWindow) return mainWindowOpen(matchMainWindow);
        
        const matchSubWindow = matchMapStartWithId(clickedElement.id, WINDOW_S);
        if (!matchSubWindow) return;
        showFlex(getElement(`${matchSubWindow}-modal`));
        showFlex(getElement(`${matchSubWindow}-container`));
    });
};

function mainWindowOpen(windowName) {
    let pageId = "";
    switch (windowName) {
        case WINDOW_M.CHECKIN:
            pageId = PAGEID.CHECKIN;
            break;
        case WINDOW_M.CHECKOUT:
            pageId = PAGEID.CHECKOUT;
            break;
        case WINDOW_M.SEARCHRSV:
            pageId = PAGEID.SEARCHRSV;
            break;
        default:
            return;
    }
    window.open(`../html/${pageId}.html`, '_blank');
};

export async function loadSubWindowHTMLs(pageId) {
    let loadMap = "";
    switch (pageId) {
        case PAGEID.CHECKOUT:
            loadMap = checkOutLoadMap;
            break;
        default:
            return;
    }
    for (const [className, path] of Object.entries(loadMap)) {
        fetch(path).then(res => res.text()).then(html => {
            getInnerHtml(`${className}-container`, html);
            setHeaderSStr(className);
        });
    };
};

const codeAndNumMap = {[WINDOW_S.CODEANDNUM]: `../html/${PAGEID.CODEANDNUM}.html`};
const codeListMap = {[WINDOW_S.CODELIST]: `../html/${PAGEID.CODELIST}.html`};
const optionMap = {[WINDOW_S.OPTION]: `../html/${PAGEID.OPTION}.html`};
const inputFormMap = {[WINDOW_S.INPUTFORM]: `../html/${PAGEID.INPUTFORM}.html`};

const checkOutLoadMap = {
    [WINDOW_S.BILLING]: `../html/${PAGEID.BILLING}.html`,
    ...codeAndNumMap,
    ...codeListMap,
    ...optionMap,
    ...inputFormMap,
}