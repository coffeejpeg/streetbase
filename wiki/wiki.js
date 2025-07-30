document.addEventListener('DOMContentLoaded', function() {
  // Toggle sidebar sections
  const sidebarButtons = document.querySelectorAll('.sidebar-button');
  
  sidebarButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Toggle the active class on the button
      this.classList.toggle('active');
      
      // Find the submenu associated with this button
      const submenu = this.nextElementSibling;
      
      // Toggle submenu visibility
      if (submenu.style.display === 'none' || submenu.style.display === '') {
        submenu.style.display = 'flex';
        // Change the chevron icon to up
        this.querySelector('.fa-chevron-down').classList.replace('fa-chevron-down', 'fa-chevron-up');
      } else {
        submenu.style.display = 'none';
        // Change the chevron icon to down
        this.querySelector('.fa-chevron-up').classList.replace('fa-chevron-up', 'fa-chevron-down');
      }
    });
  });

  // Search functionality
  const searchInput = document.querySelector('.search-box input');
  
  searchInput.addEventListener('focus', function() {
    this.parentElement.style.boxShadow = '0 0 0 2px rgb(43, 153, 226)';
  });
  
  searchInput.addEventListener('blur', function() {
    this.parentElement.style.boxShadow = 'none';
  });

  // Keyboard shortcut for search
  document.addEventListener('keydown', function(event) {
    // Check if Ctrl+K was pressed
    if (event.ctrlKey && event.key === 'k') {
      event.preventDefault();
      searchInput.focus();
    }
  });

  function search(){
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase()
    let x = document.getElementsByClassName('sidebar-submenu')

    for(i = 0; i < x.length; i++){
        if(!x[i].innerHTML.toLowerCase().includes(input)){
            x[i].computedStyleMap.display = "none"
            }
        else{
            x[i].style.display = "nav-item"
        }
    }
}

  // Theme toggle (dark/light mode)
  const themeToggle = document.querySelector('.fa-moon');
  
  themeToggle.addEventListener('click', function() {
    // Toggle between moon and sun icons
    this.classList.toggle('fa-moon');
    this.classList.toggle('fa-sun');
    
    // Toggle dark/light mode classes on body
    document.body.classList.toggle('light-mode');
    
    // You would add more logic here to actually change the theme
  });
});