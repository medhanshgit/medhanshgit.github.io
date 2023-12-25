function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    var elements = document.querySelectorAll('h1, p');
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.toggle('dark-mode');
    }
}

document.querySelector('input[type="checkbox"]').addEventListener('change', toggleDarkMode);