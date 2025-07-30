import { matchIdWithClass, getElement, hide, showFlex } from './domUtils.js'

export function initWindowDisplay () {
    const mainWindowClassNames = ['checkIn', 'checkOut', 'searchRSV'];
    const subWindowClassNames = ['billing', 'codeAndNum', 'codeList', 'option'];
    const btnStateWindow = ['codeAndNum'];
    
    function mainWindowOpen(windowName) {
        switch (windowName) {
            case "checkIn":
                window.open('../html/M01checkIn.html', '_blank');
                break;
            case "checkOut":
                window.open('../html/M02checkOut.html', '_blank');
                break;
            case "searchRSV":
                window.open('../html/M03searchRSV.html', '_blank');
                break;
            default:
                return;
        }
    }
    
    document.body.addEventListener('click', (e) => {
        const clickedElement = e.target; 
        if (!clickedElement.matches('[id$="-close-btn"]')) return;
        if(matchIdWithClass(clickedElement.id, mainWindowClassNames)) return window.close();
        
        const matchSubWindow = matchIdWithClass(clickedElement.id, subWindowClassNames);
        if (!matchSubWindow) return;
        hide(getElement(`${matchSubWindow}-modal`));
        hide(getElement(`${matchSubWindow}-container`));
    });
    
    document.body.addEventListener('click', (e) => {
        const clickedElement = e.target; 
        if (!clickedElement.matches('[id$="-open-btn"]')) return;
        const matchMainWindow = matchIdWithClass(clickedElement.id, mainWindowClassNames);
        if (matchMainWindow)  return mainWindowOpen(matchMainWindow);
    
        const matchSubWindow = matchIdWithClass(clickedElement.id, subWindowClassNames);
        if (!matchSubWindow) return;
        showFlex(getElement(`${matchSubWindow}-modal`));
        showFlex(getElement(`${matchSubWindow}-container`));
    });
}
