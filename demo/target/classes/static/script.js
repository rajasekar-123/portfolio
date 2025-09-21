document.addEventListener('DOMContentLoaded', function () {
  // ---------------- Scroll Animations ----------------
  const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains('section-heading')) {
          entry.target.style.animation = 'fadeInUp 1s ease forwards';
        } else if (entry.target.classList.contains('about-image')) {
          entry.target.style.animation = 'fadeInRight 1s ease forwards';
        } else if (entry.target.classList.contains('skill-card')) {
          Array.from(entry.target.parentElement.children).forEach((card, index) => {
            card.style.animation = `fadeInUp 1s ease forwards ${index * 0.2}s`;
          });
        } else if (entry.target.classList.contains('project-card')) {
          Array.from(entry.target.parentElement.children).forEach((card, index) => {
            card.style.animation = `fadeInUp 1s ease forwards ${index * 0.2}s`;
          });
        } else if (entry.target.classList.contains('education-content')) {
          entry.target.style.animation = 'fadeInUp 1s ease forwards';
        } else if (entry.target.classList.contains('contact-info')) {
          entry.target.style.animation = 'fadeInLeft 1s ease forwards';
        } else if (entry.target.classList.contains('contact-form')) {
          entry.target.style.animation = 'fadeInRight 1s ease forwards';
        }
      }
    });
  }, observerOptions);

  document.querySelectorAll('.section-heading, .about-image, .skill-card, .project-card, .education-content, .contact-info, .contact-form')
    .forEach(el => observer.observe(el));

  // Navbar scroll effect
  window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  });

  // ---------------- Chat Widget ----------------
  const chatWidget = document.getElementById('chat-widget');
  const chatInput = document.getElementById('chat-input');
  const chatMessages = document.getElementById('chat-messages');
  const chatHeader = document.getElementById('chat-header');

  chatHeader.addEventListener('click', () => chatWidget.classList.toggle('collapsed'));

  function appendMessage(text, sender) {
    const msg = document.createElement('div');
    msg.classList.add('message', sender);
    msg.innerText = text;
    chatMessages.appendChild(msg);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  chatInput.addEventListener
    ('keypress', async (e) => {
      if (e.key === 'Enter' && chatInput.value.trim() !== '') {
        const userMessage = chatInput.value.trim();
        appendMessage(userMessage, 'user');
        chatInput.value = '';

        try {
          // Use full URL to backend
          const response = await fetch(`http://localhost:8080/chat?message=${encodeURIComponent(userMessage)}`);
          const botReply = await response.text();
          appendMessage(botReply, 'bot');
        } catch (error) {
          appendMessage('Error: Cannot reach backend.', 'bot');
          console.error(error);
        }
      }
    });
});


