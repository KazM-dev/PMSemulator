export function isClickedBtn (clickedBtn) {
  return sessionStorage.getItem("clickedBtn") === clickedBtn;
}

export function observeElement(observeArr, callback) {
  const element = observeArr[0];
  const observer = new MutationObserver(() => {
    if (getComputedStyle(element).display === 'flex') {
      callback(observeArr);
      observer.disconnect();
    }
  });
  observer.observe(element, { attributes: true, attributeFilter: ['style', 'class'] });
}