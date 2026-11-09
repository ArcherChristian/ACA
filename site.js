/* Archer Christian Academy — site.js
   Rebuilds email and phone links that are stored obfuscated in the HTML,
   so address-harvesting bots reading the raw source get nothing usable. */
(function () {
  'use strict';
  var rev = function (s) { return s.split('').reverse().join(''); };

  /* ---- contact links ---- */
  document.querySelectorAll('a[data-u][data-d]').forEach(function (a) {
    var addr = rev(a.getAttribute('data-u')) + '@' + rev(a.getAttribute('data-d'));
    var subj = a.getAttribute('data-s');
    a.href = 'mailto:' + addr + (subj ? '?subject=' + subj : '');
    if (a.hasAttribute('data-show')) a.textContent = addr;
    a.removeAttribute('data-u'); a.removeAttribute('data-d'); a.removeAttribute('data-s'); a.removeAttribute('data-show');
  });
  document.querySelectorAll('a[data-n]').forEach(function (a) {
    var num = rev(a.getAttribute('data-n'));
    a.href = 'tel:' + num;
    if (a.hasAttribute('data-show')) a.textContent = num.replace(/^(\d{3})(\d{3})(\d{4})$/, '$1-$2-$3');
    a.removeAttribute('data-n'); a.removeAttribute('data-show');
  });

})();
