window.addEventListener('scroll', function() {
    let navbarHeight = document.querySelector('nav').offsetHeight;
    let scrollTopButton = document.querySelector('.scroll-top-button');
    
    if (window.scrollY > navbarHeight) {
      scrollTopButton.style.display = 'block';
    } else {
      scrollTopButton.style.display = 'none';
    }
  });