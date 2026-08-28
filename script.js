const input = document.getElementById('search-input');
input.addEventListener('input', function() {
    const searchTerm = input.value.toLowerCase();
    const especies = Array.from(document.querySelectorAll('.marco'));
    
    const elementos_filtrados =  elementos_filtados.filter(especie => 
        const dataRaza = elemento.getAttribute('data-raza').toLowerCase();
        return dataRaza.includes(searchTerm);
    );

    
    especies.forEach(e => e.style.display = 'none');

    elementos_filtados.forEach(e => e.style.display = 'block');
});