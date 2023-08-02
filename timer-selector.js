// Constants
var SECONDS_MS = 1000;
var MINUTES_MS = SECONDS_MS * 60;
var HOURS_MS = MINUTES_MS * 60;
var DAYS_MS = HOURS_MS * 24;

// Initialization errors are only in English unfortunately.
function setError(primary, secondary = null) {
  var errorElement = document.getElementById('error');
  errorElement.classList.remove('hidden');
  errorElement.innerText = primary;

  var formElement = document.getElementById('form');
  formElement.classList.add('hidden');

  if (secondary) {
    var secondaryErrorElement = document.createElement('div');
    secondaryErrorElement.classList = ['error-secondary'];
    secondaryErrorElement.innerText = secondary;
    errorElement.appendChild(secondaryErrorElement);
  }
}

// Localization
var TRANSLATIONS = {
  // English
  'en': {
    'timer-description': 'Timer expiring at',
    'timer-progress': 'This timer will expire in',
    'timer-finished': 'This timer has been expired since',
    'timer-type': 'Timer Type',
    'timer-type-generic': 'Generic',
    'timer-type-deletion': 'Deletion',
    'timer-type-ban': 'Ban',
    'duration': 'Duration',
    'duration-1d': '1 Day',
    'duration-1w': '1 Week',
    'duration-2w': '2 Weeks',
    'duration-1y': '1 Year',
    'duration-custom': 'Custom',
    'unit-minute': 'minutes',
    'unit-hour': 'hours',
    'unit-day': 'days',
    'unit-week': 'weeks',
    'unit-month': 'months',
    'unit-year': 'years',
    'start-time': 'Start Time',
    'start-time-now': 'Now',
    'start-time-later': 'Later',
    'messages': 'Messages',
    'message-progress': 'Timer in-progress (optional)',
    'message-finished': 'Timer finished (optional)',
    'advanced-section': 'Advanced',
    'height': 'Height',
    'width': 'Width',
    'css-extra': 'Custom timer CSS (optional)',
    'template': 'Output template',
    'template-deletion': 'Beginning deletion confirmation at -10.\n\n%%iframe%%\n\nIf this article is over a year old, you are not the author, and you want to rewrite this article, PM a member of the [[[rewrite-guide|Rewrite Team]]]. Please request permission from the author and make sure you copy the page source to your sandbox. **Do not reply to this post unless you are staff.**',
    'template-ban': '%%iframe%%',
    'message-deletion-progress': 'This page will be eligible for deletion in',
    'message-deletion-finished': 'This page has been eligible for deletion since',
    'message-ban-progress': 'This user\'s ban will elapse in',
    'message-ban-finished': 'This user\'s ban has been expired since',
    'build-timer': 'Build timer',
    'info-help': 'help',
    'info-source': 'source',
    'error-missing': 'Please make a selection in each section first.',
    'error-invalid': 'Invalid internal state, please file a bug report.',
  },

  // French
  'fr': {
    'timer-description': 'Fin du compte à rebours à',
    'timer-progress': 'Ce compte à rebours se terminera dans',
    'timer-finished': 'Ce compte à rebous est terminé depuis',
    'timer-type': 'Type de compte à rebours',
    'timer-type-generic': 'Générique',
    'timer-type-deletion': 'Suppression',
    'timer-type-ban': 'Bannissement',
    'duration': 'Durée',
    'duration-1d': '1 jour',
    'duration-1w': '1 semaine',
    'duration-2w': '2 semaines',
    'duration-1y': '1 an',
    'duration-custom': 'Personnalisé',
    'unit-minute': 'minutes',
    'unit-hour': 'heures',
    'unit-day': 'jours',
    'unit-week': 'semaines',
    'unit-month': 'mois',
    'unit-year': 'ans',
    'start-time': 'Heure de départ',
    'start-time-now': 'Maintenant',
    'start-time-later': 'Plus tard',
    'messages': 'Messages',
    'message-progress': 'Compte à rebours en cours (optionnel)',
    'message-finished': 'Compte à rebours terminé (optionnel)',
    'advanced-section': 'Avancé',
    'height': 'Hauteur',
    'width': 'Largeur',
    'css-extra': 'CSS personnalisé pour le compte à rebours (optionnel)',
    'template': "Modèle d'output",
    'template-deletion': "Début du compte à rebours de suppression à -3.\n\n%%iframe%%\n\nCe message est ouvert aux réponses de l'auteur ou d'un autre membre désirant éventuellement réécrire l'article, avec l'autorisation de l'auteur s'il est encore actif.",
    'template-ban': '%%iframe%%',
    'message-deletion-progress': 'Cette page pourra être supprimée dans',
    'message-deletion-finished': 'Cette page peut être supprimée depuis',
    'message-ban-progress': "Le bannissement de l'utilisateur se terminera dans",
    'message-ban-finished': "Le bannissement de l'utilisateur est terminé depuis",
    'build-timer': 'Définir un compte à rebours',
    'info-help': 'aide',
    'info-source': 'source',
    'error-missing': 'Veuillez sélectionner une option dans chaque section avant.',
    'error-invalid': 'État interne invalide, veuillez signaler ce problème.',
  },

  // Pig Latin
  'pig': {
    'timer-description': 'Imertay expiringyay atyay',
    'timer-progress': 'Isthay imertay illway expireyay inyay',
    'timer-finished': 'Isthay imertay ashay eenbay expiredyay incesay',
    'timer-type': 'Imertay Ypetay',
    'timer-type-generic': 'Enericgay',
    'timer-type-deletion': 'Eletionday',
    'timer-type-ban': 'Anbay',
    'duration': 'Urationday',
    'duration-1d': '1 Aday',
    'duration-1w': '1 Eekway',
    'duration-2w': '2 Eeksway',
    'duration-1y': '1 Earyay',
    'duration-custom': 'Ustomcay',
    'unit-minute': 'inutesmay',
    'unit-hour': 'ourshay',
    'unit-day': 'aysday',
    'unit-week': 'eeksway',
    'unit-month': 'onthsmay',
    'unit-year': 'earsyay',
    'start-time': 'Artstay Imetay',
    'start-time-now': 'Ownay',
    'start-time-later': 'Aterlay',
    'messages': 'Essagesmay',
    'message-progress': 'Imertay in-progressyay (optionalyay)',
    'message-finished': 'Imertay inishedfay (optionalyay)',
    'advanced-section': 'Advancedyay',
    'height': 'Eighthay',
    'width': 'Idthway',
    'css-extra': 'Ustomcay imertay CSSYAY (optionalyay)',
    'template': 'Outputyay emplatetay',
    'template-deletion': 'Eginningbay eletionday otevay atyay -10.\n\n%%iframe%%\n\nIfyay isthay articleyay isyay overyay ayay earyay oldyay, ouyay areyay otnay ethay authoryay, andyay ouyay antway otay ewriteray isthay articleyay, equestray otay oday osay inyay ethay [/forum/t-14018096/rewrite-request-thread#post-4916192 Ewriteray Equestray Eadthray]. Easeplay equestray ermissionpay omfray ehtay authoryay andyay akemay uresay ouyay opycay ehtay agepay ourcesay otay ouryay andboxsay. **Oday otnay eplyray otay isthay ostay unlessyay ouyay areyay affstay.**',
    'template-ban': '%%iframe%%',
    'message-deletion-progress': 'Isthay agepay illway ebay eligibleyay orfay eletionday inyay',
    'message-deletion-finished': 'Isthay agepay has been eligible for deletion since',
    'message-ban-progress': 'Isthay user\'syay anbay illway elapseyay inyay',
    'message-ban-finished': 'Isthay user\'syay anbay ashay eenbay expiredyay incesay',
    'build-timer': 'Uildbay imertay',
    'info-help': 'elphay',
    'info-source': 'ourcesay',
    'error-missing': 'Easeplay akemay ayay electionsay inyay eachyay ectionsay irstfay.',
    'error-invalid': 'Invalidyay internalyay atestay, easeplay ilefay ayay ugbay eportray.',
  },

  // Spanish
  'es': {
    'timer-description': 'El temporizador finaliza en',
    'timer-progress': 'El temporizador finalizará en',
    'timer-finished': 'El temporizador ha finalizado desde hace',
    'timer-type': 'Tipo de Temporizador',
    'timer-type-generic': 'Genérico',
    'timer-type-deletion': 'Eliminación',
    'timer-type-ban': 'Ban',
    'duration': 'Duración',
    'duration-1d': '1 Día',
    'duration-1w': '1 Semana',
    'duration-2w': '2 Semanas',
    'duration-1y': '1 Año',
    'duration-custom': 'Personalizado',
    'unit-minute': 'minutos',
    'unit-hour': 'horas',
    'unit-day': 'días',
    'unit-week': 'semanas',
    'unit-month': 'meses',
    'unit-year': 'años',
    'start-time': 'Hora de Inicio',
    'start-time-now': 'Ahora',
    'start-time-later': 'Luego',
    'messages': 'Mensajes',
    'message-progress': 'Temporizador en progreso (opcional)',
    'message-finished': 'Temporizador finalizado (opcional)',
    'advanced-section': 'Avanzado',
    'height': 'Alto',
    'width': 'Ancho',
    'css-extra': 'CSS personalizado del temporizador (opcional)',
    'template': 'Modelo de salida',
    'template-deletion': 'Comienzo de la eliminación en -3.\n\n%%iframe%%\n\nSi no eres el autor y desea reescribir este artículo, puede responder a este post solicitando la oportunidad de hacerlo. Obtenga permiso del autor (o de la administración si este artículo tiene más de 6 meses) y asegúrese de copiar el código fuente del artículo en su borrador. **Por favor, __no__ responda a este post por cualquier otra razón a menos que seas parte del Staff.**',
    'template-ban': '%%iframe%%',
    'message-deletion-progress': 'Esta página podrá ser eliminada en',
    'message-deletion-finished': 'Esta página puede ser eliminada desde',
    'message-ban-progress': 'El ban de este usuario finalizará en',
    'message-ban-finished': 'El ban del usuario ha finalizado desde',
    'build-timer': 'Crear temporizador',
    'info-help': 'ayuda',
    'info-source': 'código fuente',
    'error-missing': 'Por favor, haga una selección en cada sección primero.',
    'error-invalid': 'Estado interno inválido, por favor, presente un informe de error.',
  },

  // Vietnamese
  'vi': {
    'timer-description': 'Đồng hồ kết thúc vào',
    'timer-progress': 'Đồng hồ sẽ kết thúc trong',
    'timer-finished': 'Đồng hồ này đã kết thúc kể từ',
    'timer-type': 'Loại Đồng Hồ',
    'timer-type-generic': 'Chung',
    'timer-type-deletion': 'Xóa Bài',
    'timer-type-ban': 'Chặn Người Dùng',
    'duration': 'Thời Gian',
    'duration-1d': '1 Ngày',
    'duration-1w': '1 Tuần',
    'duration-2w': '2 Tuần',
    'duration-1y': '1 Năm',
    'duration-custom': 'Khác',
    'unit-minute': 'phút',
    'unit-hour': 'giờ',
    'unit-day': 'ngày',
    'unit-week': 'tuần',
    'unit-month': 'tháng',
    'unit-year': 'năm',
    'start-time': 'Đồng Hồ Bắt Đầu Vào',
    'start-time-now': 'Bây giờ',
    'start-time-later': 'Bắt đầu sau',
    'messages': 'Chữ hiện trên đồng hồ',
    'message-progress': 'Chữ hiện khi đồng hồ chưa kết thúc (không bắt buộc)',
    'message-finished': 'Chữ hiện khi đồng hồ đã kết thúc (không bắt buộc)',
    'advanced-section': 'Cài Đặt Nâng Cao',
    'height': 'Chiều cao',
    'width': 'Chiều rộng',
    'css-extra': 'CSS tùy chỉnh (không bắt buộc)',
    'template': 'Mẫu code',
    'template-deletion': '[[=]]\n\n**Bài sẽ bị xóa khi đồng hồ dưới đây đếm ngược về 0:**\n\n%%iframe%%\n\n[[/=]]\n\n**Lý do xóa:** Rating bài dưới -5.\n\n**Nếu bạn không phải là tác giả và muốn viết lại bài viết này, hãy trả lời bình luận này, liên hệ với tác giả và lưu lại mã nguồn. Ngoài ra, làm ơn không trả lời bình luận này trừ khi bạn là nhân viên.**',
    'template-ban': '%%iframe%%',
    'message-deletion-progress': 'Trang này sẽ đủ điều kiện xóa trong',
    'message-deletion-finished': 'Trang này đã đủ điều kiện xóa từ',
    'message-ban-progress': 'Lệnh chặn người dùng này sẽ hết hạn vào',
    'message-ban-finished': 'Lệnh chặn người dùng này đã hết hạn từ',
    'build-timer': 'Tạo đồng hồ',
    'info-help': 'trợ giúp',
    'info-source': 'mã nguồn',
    'error-missing': 'Hãy chọn đầy đủ các tùy chọn bắt buộc',
    'error-invalid': 'Lỗi phần mềm, vui lòng gửi báo cáo lỗi.',
  },

  // Simplified Chinese
  'cn': {
    'timer-description': '此计时器将过期于：',
    'timer-progress': '此计时器将过期于：',
    'timer-finished': '此计时器已过期：',
    'timer-type': '计时器类型',
    'timer-type-generic': '通用',
    'timer-type-deletion': '删除',
    'timer-type-ban': '封禁',
    'duration': '运行时间',
    'duration-1d': '1日',
    'duration-1w': '1周',
    'duration-2w': '2周',
    'duration-1y': '1年',
    'duration-custom': '自定义',
    'unit-minute': '分钟',
    'unit-hour': '小时',
    'unit-day': '日',
    'unit-week': '周',
    'unit-month': '月',
    'unit-year': '年',
    'start-time': '开始时间',
    'start-time-now': '现在',
    'start-time-later': '稍后',
    'messages': '通知内容',
    'message-progress': '此计时器运行中（可选）',
    'message-finished': '此计时器已到期（可选）',
    'advanced-section': '高级设置',
    'height': '高度',
    'width': '宽度',
    'css-extra': '自定计时器样式（可选）',
    'template': '输出模板',
    'template-deletion': '由于条目的分数为-X分，现根据[[[deletions-guide|删帖指导]]]，宣告将删除此页：\n\n%%iframe%%\n\n**如果你不是作者又想要重写该条目，请在此帖回复申请。请先取得作者（或管理员，如果此文档搬运自聊天室的话）的同意，并将原文的源代码复制至沙盒里。除非你是工作人员，否则请勿就申请重写以外的范围回复此帖。**',
    'template-ban': '%%iframe%%',
    'message-deletion-progress': '此页面将在计时器到期后可供删除：',
    'message-deletion-finished': '此页面在下列时间前已可供删除：',
    'message-ban-progress': '此用户的封禁将到期于：',
    'message-ban-finished': '此用户的封禁已到期：',
    'build-timer': '生成计时器',
    'info-help': '帮助',
    'info-source': '来源',
    'error-missing': '请先在每个项中做选择。',
    'error-invalid': '内部状态无效，请提交错误报告。',
  },
};

function getMessage(language, messageKey) {
  // Special case:
  // The 'test' language just echoes the message key back out.
  if (language === 'test') {
    return messageKey;
  }

  // Get message based on language
  var messages = TRANSLATIONS[language];
  if (!messages) {
    setError('No translations for language: ' + language);
    return null;
  }

  var message = messages[messageKey];
  if (!message) {
    setError('No such message key: ' + messageKey);
    return null;
  }

  return message;
}

function insertCSS(styling) {
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');

  style.type = 'text/css';
  style.appendChild(document.createTextNode(styling));
  head.appendChild(style);
}

// Timer creation
function buildUrl(language, startDate, durationMs, progressMessage, finishedMessage, styling) {
  // Calculate target datetime
  var targetDate = new Date(startDate.getTime() + durationMs);

  // Finally, build URL
  var parameters = new URLSearchParams();
  parameters.append('lang', language);
  parameters.append('time', targetDate.toISOString());

  if (progressMessage) {
    parameters.append('progress', progressMessage);
  }

  if (finishedMessage) {
    parameters.append('finished', finishedMessage);
  }

  if (styling) {
    parameters.append('style', styling);
  }

  return 'https://scpwiki.github.io/timer/timer.html?' + parameters;
}

function buildWikitext(template, url, height, width) {
  var iframe = [
    '[[iframe ', url, ' style="width: ', width, '; height: ', height, '; border: 0; text-align: center;"]]',
  ].join('');

  return template
    .replace('%%url%%', url)
    .replace('%%iframe%%', iframe);
}

function findCheckedItem(selector) {
  var elements = document.querySelectorAll(selector);
  for (var i = 0; i < elements.length; i++) {
    if (elements[i].checked) {
      return elements[i];
    }
  }

  alert(getMessage(language, 'error-missing'));
  throw new Error('Could not find a checked radio button item');
}

function getStartDate(language) {
  var element = findCheckedItem('#start input');
  switch (element.id) {
    case 'start-now':
      return new Date();
    case 'start-later':
      var dateElement = document.getElementById('start-later-date');
      var timeElement = document.getElementById('start-later-time');
      if (dateElement === null || timeElement === null) {
        alert(getMessage(language, 'error-missing'));
        throw new Error('Missing date or time element in getStartDate()');
      }

      return new Date(dateElement.value + ' ' + timeElement.value);
    default:
      alert(getMessage(language, 'error-invalid'));
      throw new Error('Invalid element ID in getStartDate()');
  }
}

function getDuration() {
  var element = findCheckedItem('#duration input');
  if (element.value !== 'custom') {
    return parseInt(element.value);
  }

  var valueElement = document.getElementById('duration-custom-value');
  var value = parseInt(valueElement.value);
  if (isNaN(value)) {
    alert(getMessage(language, 'error-missing'));
    throw new Error('No value in custom duration selector');
  }

  var unitElement = document.getElementById('duration-custom-unit');
  var unit = parseInt(unitElement.value);

  return value * unit;
}

function getTextData(language) {
  var progressElement = document.getElementById('message-progress');
  if (progressElement === null) {
    alert(getMessage(language, 'error-missing'));
    throw new Error('Missing progress element in getTextData()');
  }

  var finishedElement = document.getElementById('message-finished');
  if (finishedElement === null) {
    alert(getMessage(language, 'error-missing'));
    throw new Error('Missing finished element in getTextData()');
  }

  var heightElement = document.getElementById('height');
  if (heightElement === null) {
    alert(getMessage(language, 'error-missing'));
    throw new Error('Missing height element in getTextData()');
  }

  var widthElement = document.getElementById('width');
  if (widthElement === null) {
    alert(getMessage(language, 'error-missing'));
    throw new Error('Missing width element in getTextData()');
  }

  var customCssElement = document.getElementById('custom-css');
  if (customCssElement === null) {
    alert(getMessage(language, 'error-missing'));
    throw new Error('Missing custom CSS element in getTextData()');
  }

  var templateElement = document.getElementById('template');
  if (templateElement === null) {
    alert(getMessage(language, 'error-missing'));
    throw new Error('Missing template element in getTextData()');
  }

  return {
    progressMessage: progressElement.value,
    finishedMessage: finishedElement.value,
    height: heightElement.value,
    width: widthElement.value,
    styling: customCssElement.value,
    template: templateElement.value,
  };
}

function buildTimer(language) {
  // Unhide output
  var outputElement = document.getElementById('output');
  outputElement.classList.remove('hidden');

  // Gather values
  var startDate = getStartDate(language);
  var durationMs = getDuration(language);
  var data = getTextData(language);

  // Build wikitext and output
  var url = buildUrl(
    language,
    startDate,
    durationMs,
    data.progressMessage,
    data.finishedMessage,
    data.styling,
  );

  outputElement.value = buildWikitext(data.template, url, data.height, data.width);
}

// Initialization
function initializeMessages(language) {
  function setMessage(id, messageKey = null) {
    document.getElementById(id).innerText = getMessage(language, messageKey || id);
  }

  setMessage('timer-type-label', 'timer-type');
  setMessage('timer-type-generic-label', 'timer-type-generic');
  setMessage('timer-type-deletion-label', 'timer-type-deletion');
  setMessage('timer-type-ban-label', 'timer-type-ban');

  setMessage('start-label', 'start-time');
  setMessage('start-now-label', 'start-time-now');
  setMessage('start-later-label', 'start-time-later');

  setMessage('duration-label', 'duration');
  setMessage('duration-1d-label', 'duration-1d');
  setMessage('duration-1w-label', 'duration-1w');
  setMessage('duration-2w-label', 'duration-2w');
  setMessage('duration-1y-label', 'duration-1y');
  setMessage('duration-custom-label', 'duration-custom');

  setMessage('unit-minute');
  setMessage('unit-hour');
  setMessage('unit-day');
  setMessage('unit-week');
  setMessage('unit-month');
  setMessage('unit-year');

  setMessage('messages-label', 'messages');
  document.getElementById('message-progress').placeholder = getMessage(language, 'timer-progress');
  document.getElementById('message-finished').placeholder = getMessage(language, 'timer-finished');
  setMessage('message-progress-label', 'message-progress');
  setMessage('message-finished-label', 'message-finished');

  setMessage('advanced-label', 'advanced-section');
  setMessage('height-label', 'height');
  setMessage('width-label', 'width');
  setMessage('custom-css-label', 'css-extra');
  setMessage('template-label', 'template');
  document.getElementById('custom-css').placeholder = '#title {\n  color: #008080;\n}';

  setMessage('build', 'build-timer');
  setMessage('info-help');
  setMessage('info-source');
}

function initializeHooks(language) {
  document.getElementById('timer-type-generic').onclick = function () {
    document.getElementById('message-progress').value = '';
    document.getElementById('message-finished').value = '';
    document.getElementById('template').value = '%%iframe%%';
  };

  document.getElementById('timer-type-deletion').onclick = function () {
    document.getElementById('duration-1d').click();
    document.getElementById('message-progress').value = getMessage(language, 'message-deletion-progress');
    document.getElementById('message-finished').value = getMessage(language, 'message-deletion-finished');
    document.getElementById('template').value = getMessage(language, 'template-deletion');
  };

  document.getElementById('timer-type-ban').onclick = function () {
    document.getElementById('message-progress').value = getMessage(language, 'message-ban-progress');
    document.getElementById('message-finished').value = getMessage(language, 'message-ban-finished');
    document.getElementById('template').value = getMessage(language, 'template-ban');
  };

  function onClickStartDate() {
    document.getElementById('start-later').click();
  }

  document.getElementById('start-later-date').onclick = onClickStartDate;
  document.getElementById('start-later-time').onclick = onClickStartDate;

  function onClickCustom() {
    document.getElementById('duration-custom').click();
  }

  document.getElementById('duration-custom-value').onclick = onClickCustom;
  document.getElementById('duration-custom-unit').onclick = onClickCustom;

  document.getElementById('build').onclick = function () {
    buildTimer(language);
  };
}

function setup() {
  // Get parameters
  var url = new URL(window.location.href);
  var parameters = new URLSearchParams(url.search);
  var language = parameters.get('lang');
  var styling = parameters.get('style');

  // Check parameters
  if (!language) {
    setError('No language set', 'Parameter is "lang". Use "en" for English.');
    return;
  }

  // Insert custom CSS, if any
  if (styling !== null) {
    insertCSS(styling);
  }

  initializeMessages(language);
  initializeHooks(language);
}

setTimeout(setup, 5);
