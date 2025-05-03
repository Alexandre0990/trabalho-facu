const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const submenuItems = document.querySelectorAll('.has-submenu');

// Alternar menu em dispositivos móveis
menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// Alternar submenus em mobile
submenuItems.forEach(item => {
  item.addEventListener('click', function (e) {
    if (window.innerWidth <= 768) {
      e.preventDefault();

      // Fecha todos os submenus antes de abrir o atual
      submenuItems.forEach(i => {
        if (i !== item) {
          i.classList.remove('open');
        }
      });

      this.classList.toggle('open');
    }
  });
});

// Destacar o item ativo
const menuLinks = document.querySelectorAll('.menu a');
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});