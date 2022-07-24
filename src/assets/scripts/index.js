import Glide from '@glidejs/glide';

const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
const mobileCheckbox = document.getElementById('mobileCheckbox');

new Glide('.glide', {
  startAt: 1,
  peek: 100,
  breakpoints: {
    600: {
      peek: 20
    }
  }
}).mount();

const handleLinkClick = e => {
  mobileCheckbox.checked = false;
};

mobileNavLinks.forEach(link => link.addEventListener('click', handleLinkClick));