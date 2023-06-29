
function validarFormulario() {
  var nombre = document.getElementById('nombre').value;
  var sugerencia = document.getElementById('sugerencia').value;

  // Validar que el campo nombre no esté vacío
  if (nombre.trim() === '') {
    document.getElementById('error-message').innerText = 'Por favor, ingresa tu nombre';
    return false;
  }

  // Validar que el campo sugerencia no esté vacío
  if (sugerencia.trim() === '') {
    document.getElementById('error-message').innerText = 'Por favor, ingresa una sugerencia';
    return false;
  }

  // Validar que el campo nombre tenga más de 10 caracteres
  var caracteresFaltantesN = 10 - nombre.length;
  if (caracteresFaltantesN > 0) {
    document.getElementById('error-message').innerText = 'El nombre debe tener más de 10 caracteres. Faltan ' + caracteresFaltantesN + ' caracteres.';;
    return false;
  }

  // Validar que el campo sugerencia tenga más de 20 caracteres
  var caracteresFaltantes = 20 - sugerencia.length;
  if (caracteresFaltantes > 0) {
    document.getElementById('error-message').innerText = 'La sugerencia debe tener al menos 20 caracteres. Faltan ' + caracteresFaltantes + ' caracteres.';
    return false;
  }
  return true;
}
