document.addEventListener('DOMContentLoaded', function() {
    // Navigation toggle
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const body = document.body;
    
    // Create overlay element
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    body.appendChild(overlay);
    
    // Toggle menu function
    function toggleMenu() {
      navToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
      overlay.classList.toggle('active');
      body.classList.toggle('menu-open');
    }
    
    // Event listeners
    navToggle.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);
    
    // Handle dropdowns on mobile
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
      const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
      
      // Only add click event on mobile
      if (window.innerWidth < 992) {
        dropdownToggle.addEventListener('click', function(e) {
          e.preventDefault();
          dropdown.classList.toggle('active');
        });
      }
    });
    
    // Close menu on window resize if open
    window.addEventListener('resize', function() {
      if (window.innerWidth >= 992 && navMenu.classList.contains('active')) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        overlay.classList.remove('active');
        body.classList.remove('menu-open');
        
        // Reset any open dropdowns
        dropdowns.forEach(dropdown => {
          dropdown.classList.remove('active');
        });
      }
      
      // Reinitialize dropdown click events on resize
      if (window.innerWidth < 992) {
        dropdowns.forEach(dropdown => {
          const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
          
          // Remove existing event listeners
          dropdownToggle.removeEventListener('click', function(e) {
            e.preventDefault();
            dropdown.classList.toggle('active');
          });
          
          // Add new event listener
          dropdownToggle.addEventListener('click', function(e) {
            e.preventDefault();
            dropdown.classList.toggle('active');
          });
        });
      }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        if (this.getAttribute('href') === '#') return;
        
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
          
          // Close mobile menu if open
          if (navMenu.classList.contains('active')) {
            toggleMenu();
          }
        }
      });
    });
    
    // Scroll animations
    function reveal() {
      const reveals = document.querySelectorAll('.reveal');
      
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add('active');
        } else {
          reveals[i].classList.remove('active');
        }
      }
    }
    
    window.addEventListener('scroll', reveal);
    
    // Add reveal classes to elements
    function addRevealClasses() {
      // Content left section
      document.querySelector('.content-left h2').classList.add('reveal', 'fade-left');
      document.querySelectorAll('.content-left p').forEach((p, index) => {
        p.classList.add('reveal', 'fade-left', `delay-${(index + 1) * 2}`);
      });
      document.querySelector('.action-buttons').classList.add('reveal', 'fade-left', 'delay-6');
      
      // Content right section
      document.querySelector('.content-right').classList.add('reveal', 'fade-right');
      
      // Features section
      document.querySelectorAll('.feature').forEach((feature, index) => {
        feature.classList.add('reveal', 'fade-bottom', `delay-${index * 2}`);
      });
      
      // Industry section
      document.querySelector('.industry-section').classList.add('reveal', 'fade-bottom');
      document.querySelectorAll('.competence-item').forEach((item, index) => {
        item.classList.add('reveal', 'fade-left', `delay-${index}`);
      });
    }
    
    // Initialize animations
    addRevealClasses();
    reveal(); // Trigger once on page load
    
    // Button hover effects
    const buttons = document.querySelectorAll('.btn-primary');
    buttons.forEach(button => {
      button.addEventListener('mouseenter', function() {
        this.style.animation = 'pulse 0.5s';
      });
      
      button.addEventListener('animationend', function() {
        this.style.animation = '';
      });
    });
    
    // Logo animation
    const logo = document.querySelector('.logo');
    logo.addEventListener('mouseenter', function() {
      this.classList.add('animate__animated', 'animate__rubberBand');
    });
    
    logo.addEventListener('animationend', function() {
      this.classList.remove('animate__animated', 'animate__rubberBand');
    });
    
    // Add parallax effect to banner
    window.addEventListener('scroll', function() {
      const banner = document.querySelector('.banner-image img');
      const scrollPosition = window.scrollY;
      
      if (banner) {
        banner.style.transform = `translateY(${scrollPosition * 0.2}px)`;
      }
    });
  });