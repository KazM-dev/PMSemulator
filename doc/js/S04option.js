fetch('../html/S04option.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('option-container').innerHTML = html;
});