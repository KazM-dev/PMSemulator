fetch('../html/U01header.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('header-container').innerHTML = html;
    const NOTHING = "";

    document.addEventListener('click', (e) => {
        const clickedElement = e.target;
        if (clickedElement.closest('.header-btn')) {
          const headerMenuId = clickedElement.dataset.target;
          displayHeaderMenu(headerMenuId);
        } else if (clickedElement.closest('.header-menu')) {
          displayHeaderMenu(NOTHING);
        } else {
          displayHeaderMenu(NOTHING);
        }
    });

    function displayHeaderMenu(headerMenuId) {
      const headerMenus = document.querySelectorAll('.header-menu');
      if (headerMenuId === NOTHING) {
        headerMenus.forEach(el => {
          el.style.display = 'none';
        });
      } else {
        const headerMenu = document.getElementById(headerMenuId);
        const isHidden =
          headerMenu.style.display === 'none' || headerMenu.style.display === '';
        headerMenu.style.display = isHidden ? 'flex' : 'none';
        headerMenus.forEach(el => {
          if (el.id !== headerMenuId) {
            el.style.display = 'none';
          }
        });
      }
    }
});
