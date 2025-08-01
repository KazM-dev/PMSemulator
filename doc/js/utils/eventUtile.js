export function isClickedBtn (clickedBtn) {
  return sessionStorage.getItem("clickedBtn") === clickedBtn;
}

export function observeStyle(arr, callback, style) {
  const element = arr[0];
  console.log("arr : " + arr);
  console.log("element : " + element);
  console.log("style : " + style);
  const observer = new MutationObserver(() => {
    if (getComputedStyle(element).display === style) {
      callback(element);
      observer.disconnect();
    }
  });
  observer.observe(element, { attributes: true, attributeFilter: ['style', 'class'] });
}

export function setPrevPageId(pageId) {
  sessionStorage.setItem("prevPageId", pageId);
}

export function getPrevPageId() {
  return sessionStorage.getItem("prevPageId");
}