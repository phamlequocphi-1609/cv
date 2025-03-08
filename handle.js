const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('nav ul');
const links = document.querySelectorAll('nav ul li a');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Smooth scrolling
links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    // Close mobile menu
    navLinks.classList.remove('active');

    // Scroll to section
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    window.scrollTo({
      top: targetSection.offsetTop - 70,
      behavior: 'smooth'
    });

    // Update active link
    links.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

// Active menu based on scroll position
window.addEventListener('scroll', () => {
  let current = '';
  const sections = document.querySelectorAll('section');

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - 100) {
      current = section.getAttribute('id');
    }
  });

  links.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Contact form submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  // Validate form (simple validation)
  if (!name || !email || !subject || !message) {
    alert('Vui lòng điền đầy đủ thông tin!');
    return;
  }

  // You would normally send this data to a server
  // For this example, we'll just show an alert
  alert(`Cảm ơn ${name}! Tin nhắn của bạn đã được gửi thành công.`);

  // Reset form
  contactForm.reset();
});