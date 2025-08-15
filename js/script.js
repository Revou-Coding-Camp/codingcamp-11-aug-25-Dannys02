document.getElementById('mobile-menu-button').addEventListener('click', function() {
  const menu = document.getElementById('mobile-menu');
  menu.classList.toggle('hidden');
});

const visitorName = localStorage.getItem('visitorName') || 'Pelanggan';
document.getElementById('visitor-name').textContent = visitorName;

if (!localStorage.getItem('visitorName')) {
  const name = prompt('Hai! Siapa nama Anda?');
  if (name) {
    localStorage.setItem('visitorName', name);
    document.getElementById('visitor-name').textContent = name;
  }
}

document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  document.querySelectorAll('.error-message').forEach(el => {
    el.classList.add('hidden');
    el.previousElementSibling.classList.remove('input-error');
  });
  
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const message = document.getElementById('message').value.trim();
  
  let isValid = true;
  
  if (!name) {
    document.getElementById('name-error').classList.remove('hidden');
    document.getElementById('name').classList.add('input-error');
    isValid = false;
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    document.getElementById('email-error').classList.remove('hidden');
    document.getElementById('email').classList.add('input-error');
    isValid = false;
  }
  
  if (!phone) {
    document.getElementById('phone-error').classList.remove('hidden');
    document.getElementById('phone').classList.add('input-error');
    isValid = false;
  }
  
  if (!message) {
    document.getElementById('message-error').classList.remove('hidden');
    document.getElementById('message').classList.add('input-error');
    isValid = false;
  }
  
  if (isValid) {
    
    const resultContent = document.getElementById('result-content');
    resultContent.innerHTML = `
                    <p><strong>Nama:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Telepon:</strong> ${phone}</p>
                    <p><strong>Pesan:</strong> ${message}</p>
                `;
    
    document.getElementById('form-result').classList.remove('hidden');
    document.getElementById('contact-form').reset();
    
    // Scroll to result
    document.getElementById('form-result').scrollIntoView({ behavior: 'smooth' });
  }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
      
      document.getElementById('mobile-menu').classList.add('hidden');
    }
  });
});