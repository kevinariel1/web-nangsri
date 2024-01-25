document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        document.getElementById("mainNav").classList.add("scrolled");
      } else {
        document.getElementById("mainNav").classList.remove("scrolled");
      }
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
      window.addEventListener("scroll", function () {
        var navbarHeight = document.getElementById("mainNav").offsetHeight;
        var navLinks = document.querySelectorAll('.nav-link');
    
        if (window.scrollY > navbarHeight) {
          document.getElementById("mainNav").classList.add("scrolled");
          
          // Add a class to each .nav-link element
          navLinks.forEach(function(navLink) {
            navLink.classList.add('scrolled-link');
          });
    
        } else {
          document.getElementById("mainNav").classList.remove("scrolled");
          
          // Remove the class from each .nav-link element
          navLinks.forEach(function(navLink) {
            navLink.classList.remove('scrolled-link');
          });
        }
      });
    });
  
  document.addEventListener("DOMContentLoaded", function () {
      window.addEventListener("scroll", function () {
          var navbar = document.getElementById("mainNav");
          var navItems = document.querySelectorAll(".nav-itemc");
  
          // Set the scroll position at which you want to change the font color
          var scrollThreshold = 50;
  
          if (window.scrollY > scrollThreshold) {
              navbar.classList.add("navbar-scrolled");
  
              // Loop through each nav item and add the scrolled class
              navItems.forEach(function (item) {
                  item.classList.add("scrolled");
              });
          } else {
              navbar.classList.remove("navbar-scrolled");
  
              // Loop through each nav item and remove the scrolled class
              navItems.forEach(function (item) {
                  item.classList.remove("scrolled");
              });
          }
      });
  });
  