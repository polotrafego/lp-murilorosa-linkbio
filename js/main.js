/* Murilo Rosa · O Terceiro Sinal — interações da página */

// Leadlovers: ao concluir o envio com sucesso, exibe a página de obrigado.
// (O capture.js redireciona para a URL do painel; este override garante o obrigado.html.)
(function(){
    var OrigOpen = XMLHttpRequest.prototype.open;
    var OrigSend = XMLHttpRequest.prototype.send;
    XMLHttpRequest.prototype.open = function(method, url){
      try{ this.__llCapture = (typeof url === 'string' && url.indexOf('capture') !== -1); }catch(e){}
      return OrigOpen.apply(this, arguments);
    };
    XMLHttpRequest.prototype.send = function(){
      if(this.__llCapture){
        this.addEventListener('load', function(){
          try{
            if(this.status === 200){
              var txt = this.responseText || '';
              var hasErrors = /"errors"\s*:\s*\[\s*\{/.test(txt); // erros de validação
              if(!hasErrors){ window.location.href = 'obrigado.html'; }
            }
          }catch(e){}
        });
      }
      return OrigSend.apply(this, arguments);
    };
  })();

  // player da palestra: carrega o YouTube só ao clicar (usa a thumb como capa)
function loadPalestraVideo(){
    const f = document.getElementById('videoFacade');
    if(!f || f.dataset.loaded) return;
    f.dataset.loaded = '1';
    f.innerHTML = '<iframe src="https://www.youtube.com/embed/5r4UVE5fuyU?autoplay=1&rel=0" title="O Terceiro Sinal · Murilo Rosa" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
  }
  (function(){
    const vf = document.getElementById('videoFacade');
    if(vf){ vf.addEventListener('keydown', (e)=>{ if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); loadPalestraVideo(); } }); }
  })();

  function scrollCarousel(trackId, dir){
    const track = document.getElementById(trackId);
    if(!track) return;
    const card = track.querySelector('.photo-card');
    const step = card ? card.getBoundingClientRect().width + 18 : 300;
    track.scrollBy({ left: dir * step * 2, behavior: 'smooth' });
  }

  // reveal on scroll
  const revealEls = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('is-visible'); } });
  }, {threshold:0.1});
  revealEls.forEach(el=>observer.observe(el));

  // FAQ accordion
  document.querySelectorAll('.faq-item').forEach(item=>{
    const q = item.querySelector('.faq-q');
    const a = item.querySelector('.faq-a');
    q.addEventListener('click', ()=>{
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(o=>{ o.classList.remove('open'); o.querySelector('.faq-a').style.maxHeight = null; });
      if(!isOpen){ item.classList.add('open'); a.style.maxHeight = a.scrollHeight + 'px'; }
    });
  });

  // lightbox para as fotos de palco
  function openLightbox(src, alt){
    const lb = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    if(!lb || !img) return;
    img.src = src;
    img.alt = alt || '';
    lb.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }
  function closeLightbox(){
    const lb = document.getElementById('lightbox');
    if(!lb) return;
    lb.classList.remove('is-open');
    document.body.style.overflow = '';
  }
  document.querySelectorAll('#palcoTrack .photo-card img').forEach(img=>{
    img.addEventListener('click', ()=> openLightbox(img.src, img.alt));
  });
  const lightboxEl = document.getElementById('lightbox');
  if(lightboxEl){
    lightboxEl.addEventListener('click', (e)=>{ if(e.target === lightboxEl || e.target.classList.contains('lightbox-close')) closeLightbox(); });
  }
  document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') closeLightbox(); });
