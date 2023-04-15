window.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('header a');
  const currentPath = window.location.pathname;

  links.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('selected');
    }
  });
});
