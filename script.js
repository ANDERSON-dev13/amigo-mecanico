function convertToInches() {
    const mm = parseFloat(document.getElementById('inputValue').value);
    if (isNaN(mm)) {
        alert('Digite um valor válido em milímetros!');
        return;
    }
    const inches = (mm / 25.4).toFixed(3);
    document.getElementById('result').innerText = `${mm} mm = ${inches} polegadas`;
}

function convertToMm() {
    const inches = parseFloat(document.getElementById('inputValue').value);
    if (isNaN(inches)) {
        alert('Digite um valor válido em polegadas!');
        return;
    }
    const mm = (inches * 25.4).toFixed(3);
    document.getElementById('result').innerText = `${inches} polegadas = ${mm} mm`;
}
