const input = document.getElementById('search-input');
input.addEventListener('input', function() {
    const searchTerm = input.value.toLowerCase();
    const especies = Array.from(document.querySelectorAll('.marco'));
    
    const especiesEncontradas = especies.filter(especie => 
        especie.querySelector('h3').textContent.toLowerCase().includes(searchTerm)
    );
    
    especies.forEach(e => e.style.display = 'none');
    especiesEncontradas.forEach(e => e.style.display = 'block');
});