function setError(primary, secondary = null) {
  // Errors are only in English unfortunately

  document.getElementById('timer-error').innerText = primary;

  if (secondary) {
    document.getElementById('timer-error-secondary').innerText = secondary;
  }
}

function getMessage(language, messageKey) {
  var translations;
  switch (messageKey) {
    case 'timer-progress':
      return 'This timer will expire in';
    case 'timer-finished':
      return 'This timer has been expired since';
    default:
      setError('No such message key: ' + messageKey);
  }
}

var SECONDS_MS = 1000;
var MINUTES_MS = SECONDS_MS * 60;
var HOURS_MS = MINUTES_MS * 60;
var DAYS_MS = HOURS_MS * 24;
var MONTHS_MS = DAYS_MS * 30;

function timeRemaining(endTime) {
  var elapsed = endTime - new Date();
  var finished = true;

  if (elapsed < 0) {
    elapsed = -elapsed;
    finished = false;
  }

  var months = Math.floor(elapsed / MONTHS_MS);
  elapsed = Math.floor(elapsed % MONTHS_MS);

  var days = Math.floor(elapsed / DAYS_MS);
  elapsed = Math.floor(elapsed % DAYS_MS);

  var hours = Math.floor(elapsed / HOURS_MS);
  elapsed = Math.floor(elapsed % HOURS_MS);

  var minutes = Math.floor(elapsed / MINUTES_MS);
  elapsed = Math.floor(elapsed % MINUTES_MS);

  var seconds = Math.floor(elapsed / SECONDS_MS);

  return {
    months: months,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
    finished: finished,
  };
}

function createTimer(language, timestamp, progressMessage, finishedMessage) {
  progressMessage = progressMessage || getMessage(language, 'timer-progress');
  finishedMessage = finishedMessage || getMessage(language, 'timer-finished');

  function updateTimer() {
  }

}

function setup() {
  // Get parameters
  var parameters = new URLSearchParams(window.location.href);
  var language = parameters.get('lang');
  var timestamp = parameters.get('time');
  var progressMessage = parameters.get('msg1');
  var finishedMessage = parameters.get('msg2');

  // Check parameters
  if (!language) {
    setError('No language set', 'Use "en" for English');
    return;
  }

  if (!timestamp) {
    setError('No timestamp set');
    return;
  }

  try {
    if (/\d+(\.\d+)?/.exec(timestamp)) {
      timestamp = parseFloat(timestamp) / 1000;
    } else {
      timestamp = Date.parse(timestamp);
    }
  } catch (error) {
    setError('Invalid timestamp', error);
  }

  // Initialize clock
  createTimer(language, timestamp, progressMessage, finishedMessage);
}

setup();
