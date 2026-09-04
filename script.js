const input = document.getElementById('search-input');
input.addEventListener('input', function() {
    const searchTerm = input.value.toLowerCase();
    const especies = Array.from(document.querySelectorAll('.marco'));
    
    const elementos_filtrados =  especies.filter(especie => {
        const dataRaza = especie.getAttribute('data-raza').toLowerCase();
        return dataRaza.includes(searchTerm);
    });

    
    especies.forEach(e => e.style.display = 'none');

    elementos_filtrados.forEach(e => e.style.display = 'block');
});