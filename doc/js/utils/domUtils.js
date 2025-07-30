export function getElement(id) {
  const el = document.getElementById(id);
  return el;
}

export function selector(selector) {
  const el = document.querySelector(selector);
  return el;
}

export function selectorAll(selector) {
  const els = document.querySelectorAll(selector);
  return els;
}

export function getInnerHtml(id, html) {
  const el = getElement(id);
  el.innerHTML = html;
}

export function addClasses(el, ...classes) {
  el.classList.add(...classes);
}

export function hide(el) {
  el.style.display = 'none';
}

export function hideAll(els) {
  els.forEach(el => {
    hide(el);
  });
}

export function showFlex(el) {
  el.style.display = 'flex';
}

export function isHidden(el) {
  return el.style.display === 'none' || el.style.display === '';
}

export function displayGroup(el, els) {
  let wasHidden = true;
  wasHidden = isHidden(el);
  hideAll(els);
  if(wasHidden) {
    showFlex(el);
  }
}

export function isEContains(argEl, els) {
  for (const el of els) {
    if (argEl === el) {
      return true;
    }
  }
  return false;
}

export function isCContains(el, className) {
  return el.classList.contains(className);
}

export function matchIdWithClass(elId, classNames) {
  for (const className of classNames) {
    if (elId.startsWith(className)) {
        return className;
      };
    };
  return "";
}