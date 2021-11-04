document.addEventListener("DOMContentLoaded", function() {
    var initializeStickyHeader = function(navbar) {
      var stickyHeight = 300;
      var scrollValue = window.scrollY;
      if (scrollValue > stickyHeight){
        navbar.classList.add('is-fixed');
      } else if (scrollValue < stickyHeight){
        navbar.classList.remove('is-fixed');
      }

    }

    var stickyHeaderNavbar = document.querySelector('.sticky-header');
    window.addEventListener('scroll', function(e){
        if(stickyHeaderNavbar){
            initializeStickyHeader(stickyHeaderNavbar);
        }
    });
  
});