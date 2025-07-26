fetch('../html/S01billing.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('billing-container').innerHTML = html;

    const paymentBtn = document.getElementById('payment-btn');
    paymentBtn.addEventListener('click', () =>{
      displayCodeAndNum();
      document.getElementById('select-window').style.display = 'flex';
      document.getElementById('post-list').style.display = 'none';
      document.getElementById('payment-list').style.display = 'flex';
    });
    
    const postBtn = document.getElementById('post-btn');
    postBtn.addEventListener('click', () =>{
      displayCodeAndNum();
      document.getElementById('select-window').style.display = 'none';
      document.getElementById('payment-list').style.display = 'none';
      document.getElementById('post-list').style.display = 'flex';
    });

    const billingCloseBtn = document.getElementById('billing-close-btn');
    billingCloseBtn.addEventListener('click', () =>{
      document.getElementById('billing-modal').style.display = 'none';
      document.getElementById('billing-container').style.display = 'none';
    });
});

function displayCodeAndNum () {
  document.getElementById('code-and-num-modal').style.display = 'flex';
  document.getElementById('code-and-num-container').style.display = 'flex';
};