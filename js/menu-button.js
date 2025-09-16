const menuBtn = document.getElementById('menu-btn');
const menuReturnBtn = document.getElementById('menu-return');
const navMenu = document.getElementById('nav-menu');

// Event listener for the initial menu button
menuBtn.addEventListener('click', () => {
  // Hide the menu button itself
  menuBtn.classList.add('hamburger-button-hidden');
  
  // Show the return button
  menuReturnBtn.classList.remove('hamburger-button-hidden');
  
  // Show the navigation menu
  navMenu.classList.remove('nav-menu-hidden');
});

// Event listener for the return button
menuReturnBtn.addEventListener('click', () => {
  // Hide the return button itself
  menuReturnBtn.classList.add('hamburger-button-hidden');
  
  // Show the menu button
  menuBtn.classList.remove('hamburger-button-hidden');
  
  // Hide the navigation menu
  navMenu.classList.add('nav-menu-hidden');
});