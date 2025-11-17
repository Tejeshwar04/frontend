// Hotel Slider Logic
document.addEventListener('DOMContentLoaded', function() {
  const slider = document.getElementById('hotelSlider');
  const prevBtn = document.getElementById('hotelPrevBtn');
  const nextBtn = document.getElementById('hotelNextBtn');
  
  let currentIndex = 0;
  const cards = slider.children;
  const totalCards = cards.length;
  
  function getCardsToShow() {
    if (window.innerWidth >= 1024) return 3; // lg
    if (window.innerWidth >= 768) return 2;  // md
    return 1; 
  }
  
  function updateSliderPosition() {
    const cardsToShow = getCardsToShow();
    const cardWidth = cards[0].offsetWidth;
    const gap = 24; // 24px gap (gap-6)
    const translateX = -(currentIndex * (cardWidth + gap));
    slider.style.transform = `translateX(${translateX}px)`;
  }
  
  nextBtn.addEventListener('click', function() {
    const cardsToShow = getCardsToShow();
    const maxIndex = totalCards - cardsToShow;
    
    if (currentIndex < maxIndex) {
      currentIndex++;
      updateSliderPosition();
    }
  });
  
  prevBtn.addEventListener('click', function() {
    if (currentIndex > 0) {
      currentIndex--;
      updateSliderPosition();
    }
  });
  
  // Reset position on window resize
  window.addEventListener('resize', function() {
    currentIndex = 0;
    updateSliderPosition();
  });
  
  // Initialize slider position
  updateSliderPosition();
});