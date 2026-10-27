/* 只注册同源缓存，不缓存账户API，不中断正在运行的游戏。 */
(() => {
  const event = name => { try { window.plausible?.(name); } catch {} };
  const standalone = matchMedia('(display-mode: standalone)').matches || navigator.standalone;
  if (standalone) { event('PWA Page View'); try { if (!sessionStorage.getItem('sg-pwa-session')) { event('PWA Session'); sessionStorage.setItem('sg-pwa-session', '1'); } } catch {} }
  if ('serviceWorker' in navigator && isSecureContext) { const register = () => {
    navigator.serviceWorker.register('/sw.js', { scope: '/' }).catch(() => event('PWA Service Worker Error'));
  }; if(document.readyState === 'complete') register(); else window.addEventListener('load', register, {once:true}); }
})();
