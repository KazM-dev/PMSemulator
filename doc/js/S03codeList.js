fetch('../html/S03codeList.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('codeList-container').innerHTML = html;
});