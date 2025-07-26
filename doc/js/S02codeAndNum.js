fetch('../html/S02codeAndNum.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('code-and-num-container').innerHTML = html;

    const codeListBtn = document.getElementById('code-list-btn');
    codeListBtn.addEventListener('click', () => {
      document.getElementById('code-list-modal').style.display = 'flex';
      document.getElementById('code-list-container').style.display = 'flex';
    });
    
    const codeAndNumCloseBtn = document.getElementById('code-and-num-close-btn');
    codeAndNumCloseBtn.addEventListener('click', () => {
      document.getElementById('code-and-num-modal').style.display = 'none';
      document.getElementById('code-and-num-container').style.display = 'none';
    });
});