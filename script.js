(function(){
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  const inline = document.getElementById('calendly-inline');
  if (inline) {
    if (CALENDLY_URL && CALENDLY_URL.includes('calendly.com/')) {
      inline.setAttribute('data-url', CALENDLY_URL);
    } else {
      inline.parentElement.innerHTML = '<div class="card"><p>Ajoutez votre lien Calendly dans <code>index.html</code> (variable <strong>CALENDLY_URL</strong>) pour activer la réservation en ligne.</p></div>';
    }
  }

  const btn = document.getElementById('btn-reserver');
  if (btn) {
    btn.addEventListener('click', function(){
      if (CALENDLY_URL && window.Calendly && CALENDLY_URL.includes('calendly.com/')) {
        Calendly.initPopupWidget({url: CALENDLY_URL});
      } else {
        document.getElementById('calendly').scrollIntoView({behavior:'smooth'});
      }
    });
  }
})();

// Simple success notice for static hosting (Formspree redirect uses ?success=1)
(function(){
  const params = new URLSearchParams(location.search);
  if (params.get('success') === '1') {
    const form = document.getElementById('prequal-form');
    if (form) {
      form.outerHTML = '<div class="card"><h3>Merci!</h3><p>Votre demande a été envoyée. Je vous recontacte sous peu.</p></div>';
    }
  }
})();