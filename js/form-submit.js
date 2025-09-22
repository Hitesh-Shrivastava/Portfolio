const form = document.getElementById('contact-form');

form.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent page reload

  fetch(form.action, {
    method: 'POST',
    body: new FormData(form),
    headers: { 'Accept': 'application/json' }
  })
  .then(response => {
    if (response.ok) {
      alert('Message sent successfully!');
      form.reset(); // Clear form
    } else {
      alert('Oops! Something went wrong. Please try again.');
    }
  })
  .catch(error => {
    alert('Oops! Something went wrong. Please try again.');
    console.error(error);
  });
});