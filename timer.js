function setError(primary, secondary = null) {
  document.getElementById('timer-error').innerText = primary;

  if (secondary) {
    document.getElementById('timer-error-secondary').innerText = secondary;
  }
}

function setup() {
  // Get parameters
  var parameters = new URLSearchParams(window.location.href);
  var language = parameters.get('lang');
  var timestamp = parameters.get('time');

  // Check parameters
  if (!language) {
    setError('No language set', 'Use "en" for English');
    return;
  }

  if (!timestamp) {
    setError('No timestamp set');
    return;
  }
}

setup();
