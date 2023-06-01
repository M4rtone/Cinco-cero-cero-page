document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');
    const starsContainer = document.querySelector('.stars');
  
    container.addEventListener('mousemove', function(event) {
      const x = event.clientX;
      const y = event.clientY;
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = x + 'px';
      star.style.top = y + 'px';
      starsContainer.appendChild(star);
  
      setTimeout(function() {
        starsContainer.removeChild(star);
      }, 1000);
    });
  });