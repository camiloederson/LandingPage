// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const menuToggle = document.createElement('button');
    menuToggle.textContent = '☰'; // Ícono del menú
    menuToggle.classList.add('menu-toggle');
    
    // Agregar el botón de menú a la barra de navegación
    navbar.appendChild(menuToggle);
    
    // Almacenar la referencia a la lista de enlaces
    const menuItems = navbar.querySelector('ul');
  
    // Función para alternar el menú
    menuToggle.addEventListener('click', () => {
      menuItems.classList.toggle('active');
    });
  
    // Cerrar el menú al hacer clic en un enlace
    const links = menuItems.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        menuItems.classList.remove('active');
      });
    });
  });
  