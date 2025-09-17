// Main JavaScript for Kilna.com Hugo site

document.addEventListener('DOMContentLoaded', function() {
  // Sticky navigation menu
  const stickyMenu = document.querySelector('.menu');
  let lastScrollTop = 0;
  
  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
      stickyMenu.classList.add('scrolled');
    } else {
      stickyMenu.classList.remove('scrolled');
    }
    
    lastScrollTop = scrollTop;
  });

  // Use unified smooth scrolling for all navigation links
  const navScrollLinks = document.querySelectorAll('nav a.scroll[href^="/#"]');
  navScrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      const targetId = href.replace('/#', '#');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        unifiedSmoothScroll(targetElement);
      }
    });
  });

  // Handle other anchor links (not in nav)
  const otherAnchorLinks = document.querySelectorAll('a[href^="#"]:not(nav a)');
  otherAnchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        unifiedSmoothScroll(targetElement);
      }
    });
  });

  // Text rotation removed - no longer needed


  // Lightweight accolades carousel
  const accoladesCarousel = document.querySelector('#accolades-carousel');
  if (accoladesCarousel) {
    const items = Array.from(accoladesCarousel.querySelectorAll('.item'));
    let idx = 0;
    const activate = (i) => {
      items.forEach((el, j) => el.classList.toggle('active', j === i));
    };
    if (items.length > 0) {
      activate(idx);
      setInterval(() => {
        idx = (idx + 1) % items.length;
        activate(idx);
      }, 3000);
    }
  }

  // Lightweight quotes carousel
  const quotesCarousel = document.querySelector('#quote-carousel');
  if (quotesCarousel) {
    const items = Array.from(quotesCarousel.querySelectorAll('.item'));
    let idx = 0;
    const activate = (i) => {
      items.forEach((el, j) => el.classList.toggle('active', j === i));
    };
    if (items.length > 0) {
      activate(idx);
      setInterval(() => {
        idx = (idx + 1) % items.length;
        activate(idx);
      }, 5000); // Longer interval for quotes
    }
  }

  // Service accordion styling is now handled in the main CSS file

  // Mobile menu functionality (if needed)
  const menuTrigger = document.querySelector('#sm-trigger');
  const menu = document.querySelector('#sm');
  const menuClose = document.querySelector('.menu-close');
  
  if (menuTrigger && menu) {
    menuTrigger.addEventListener('click', function() {
      menu.classList.toggle('active');
    });
  }
  
  if (menuClose && menu) {
    menuClose.addEventListener('click', function() {
      menu.classList.remove('active');
    });
  }

  // Hide mobile menu trigger and close button on all devices
  const mobileStyle = document.createElement('style');
  mobileStyle.textContent = `
    #sm-trigger {
      display: none;
    }
    
    .menu-close {
      display: none;
    }
  `;
  document.head.appendChild(mobileStyle);

  // Unified Firefox-compatible smooth scroll function
  function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  function unifiedSmoothScroll(targetElement, duration = 800) {
    if (!targetElement) return;
    
    const targetPosition = targetElement.offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let start = null;
    
    function animation(currentTime) {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    
    requestAnimationFrame(animation);
  }


  // Scroll down functionality - scrolls to About section
  function scrollToAbout(e) {
    e.preventDefault();
    
    // Scroll to the About section
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      unifiedSmoothScroll(aboutSection);
    }
  }

  // Add scroll functionality to scroll down button
  const scrollDownBtn = document.querySelector('.scroll-down');
  if (scrollDownBtn) {
    scrollDownBtn.addEventListener('click', scrollToAbout);
  }

  // Add scroll functionality to logos
  const logos = document.querySelectorAll('img[src="/images/logo_transparent.png"]');
  logos.forEach(logo => {
    logo.style.cursor = 'pointer';
    
    // Check if this logo is in the navigation (has nav-logo class)
    if (logo.classList.contains('nav-logo')) {
      // Nav logo scrolls to top
      logo.addEventListener('click', function(e) {
        e.preventDefault();
        // Create a temporary element at the top for smooth scrolling
        const topElement = document.createElement('div');
        topElement.style.position = 'absolute';
        topElement.style.top = '0';
        topElement.style.height = '1px';
        document.body.appendChild(topElement);
        unifiedSmoothScroll(topElement);
        // Clean up the temporary element after animation
        setTimeout(() => {
          document.body.removeChild(topElement);
        }, 800);
      });
    } else {
      // Intro logo scrolls to About section
      logo.addEventListener('click', scrollToAbout);
    }
  });

});

// HTML5 Background Video initialization is handled in the scripts partial
// Modern HTML5 video with object-fit: cover provides perfect background coverage
