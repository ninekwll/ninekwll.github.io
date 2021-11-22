/*!
 * Contact Buttons Plugin Demo 0.1.0
 * https://github.com/joege/contact-buttons-plugin
 *
 * Copyright 2015, José Gonçalves
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */
 
// Google Fonts
WebFontConfig = {
  google: { families: [ 'Lato:400,700,300:latin' ] }
};
(function() {
  var wf = document.createElement('script');
  wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
    '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
})();

// Initialize Share-Buttons
$.contactButtons({
  effect  : 'slide-on-scroll',
  buttons : {
    'facebook':   { class: 'facebook', use: true, link: 'http://weibo.com/5364971500/profile?topnav=1&wvr=6&is_all=1', extras: 'target="_blank"' },
    'linkedin':   { class: 'linkedin', use: true, link: 'http://user.qzone.qq.com/1944617977/main' },
    'google':     { class: 'gplus',    use: true, link: 'http://changba.com/wap/index.php?s=R86QPSI0T4M2_anWfOD_SQ&code=Gt1bjDM0qnEZ4aFQeA8nFxsCuCE-ogWU4dW3fRHXMrohFqaGGp-3FkUIlUb1SSgpR0sDFhUEpv-v8yAD_NDFRtMRc1SjxyAdRDgfCsEpyoae8ZEHJ8RWOg' },
    'mybutton':   { class: 'git',      use: true, link: 'http://www.ecjtu.jx.cn/', icon: 'github', title: '我的大学' },
    'phone':      { class: 'phone separated',    use: true, link: '+000' },
    'email':      { class: 'email',    use: true, link: 'test@web.com' }
  }
});