function toggleCamera(camNumber) {
    const button = document.getElementById(`cam${camNumber}`);
    
    // Verificar si el botón está en estado activo
    if (button.classList.contains('active')) {
        // Si está activo, lo desactivamos
        button.classList.remove('active');
        button.style.backgroundColor = '#4CAF50'; // Verde cuando no está activa
    } else {
        // Si no está activo, lo activamos
        button.classList.add('active');
        button.style.backgroundColor = 'red'; // Rojo cuando está activa
    }
}
