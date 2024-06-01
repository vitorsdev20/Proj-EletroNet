const dropdowns = document.querySelectorAll('.dropdown_menu-5');

dropdowns.forEach((dropdown) => {
  dropdown.addEventListener('mouseover', () => {
    dropdown.classList.add('open');
  });
  dropdown.addEventListener('mouseout', () => {
    dropdown.classList.remove('open');
  });
});