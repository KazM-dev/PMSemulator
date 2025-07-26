fetch('../html/S03codeList.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('code-list-container').innerHTML = html;
    const codeListCloseBtn = document.getElementById("code-list-close-btn");
    codeListCloseBtn.addEventListener('click', () => {
      document.getElementById('code-list-container').style.display = 'none';
      document.getElementById('code-list-modal').style.display = 'none';
    });
});
