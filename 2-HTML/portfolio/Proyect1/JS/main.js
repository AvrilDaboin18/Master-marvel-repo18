const toggleBtn = document.querySelector('[data-toggle="theme"]');
const textToggleBtn = document.querySelector('.switch__label');

// Turn the theme on if the 'data-theme=dark' attribute exists in localStorage
if (localStorage.getItem('data-theme', 'dark')) {
  document.documentElement.setAttribute('data-theme', 'dark');
  document.querySelector('[data-toggle="theme"]').checked = true;
  textToggleBtn.innerText = 'Disable dark mode';
}

toggleBtn.addEventListener('click', (e) => {
  if (document.documentElement.hasAttribute('data-theme')) {
    // Turning the theme off
    document.documentElement.removeAttribute('data-theme');
    // Change text button
    textToggleBtn.innerText = 'Enable dark mode';
    // Store the preference
    localStorage.removeItem('data-theme', 'dark');
  }
  else {
    // Turning the theme on
    document.documentElement.setAttribute('data-theme', 'dark');
    textToggleBtn.innerText = 'Disable dark mode';
    // Store the preference
    localStorage.setItem('data-theme', 'dark');
  }
});