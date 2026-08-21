const input = document.getElementById('search-input');
input.addEventListener('input', function() {
    const searchTerm = input.value.toLowerCase();
    const especies = document.querySelectorAll('.marco');
    especies.forEach(function(especie) {
        const nombreEspecie = especie.querySelector('h3').textContent.toLowerCase();
        if (nombreEspecie.includes(searchTerm)) {
            especie.style.display = 'block';
        } else {
            especie.style.display = 'none';
        }
    });
});
