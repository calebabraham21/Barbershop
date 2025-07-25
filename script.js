// Modal functionality
document.addEventListener('DOMContentLoaded', function() {
  const contactLink = document.getElementById('contactLink');
  const modal = document.getElementById('contactModal');
  const closeModal = document.getElementById('closeModal');

  contactLink.addEventListener('click', function(e) {
    e.preventDefault();
    modal.style.display = 'block';
  });

  closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
  });

  window.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  // Optional: handle form submission
  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // You can add AJAX here to send the form data
    alert('Thank you for contacting us!');
    modal.style.display = 'none';
    this.reset();
  });
});
