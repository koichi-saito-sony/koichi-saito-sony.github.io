window.HELP_IMPROVE_VIDEOJS = false;

// More Works Dropdown Functionality
function toggleMoreWorks() {
    const dropdown = document.getElementById('moreWorksDropdown');
    const button = document.querySelector('.more-works-btn');
    
    if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
        button.classList.remove('active');
    } else {
        dropdown.classList.add('show');
        button.classList.add('active');
    }
}

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
    const container = document.querySelector('.more-works-container');
    const dropdown = document.getElementById('moreWorksDropdown');
    const button = document.querySelector('.more-works-btn');
    
    if (container && !container.contains(event.target)) {
        dropdown.classList.remove('show');
        button.classList.remove('active');
    }
});

// Close dropdown on escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const dropdown = document.getElementById('moreWorksDropdown');
        const button = document.querySelector('.more-works-btn');
        dropdown.classList.remove('show');
        button.classList.remove('active');
    }
});

// Copy BibTeX to clipboard
function copyBibTeX() {
    const bibtexElement = document.getElementById('bibtex-code');
    const button = document.querySelector('.copy-bibtex-btn');
    const copyText = button.querySelector('.copy-text');
    
    if (bibtexElement) {
        navigator.clipboard.writeText(bibtexElement.textContent).then(function() {
            // Success feedback
            button.classList.add('copied');
            copyText.textContent = 'Cop';
            
            setTimeout(function() {
                button.classList.remove('copied');
                copyText.textContent = 'Copy';
            }, 2000);
        }).catch(function(err) {
            console.error('Failed to copy: ', err);
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = bibtexElement.textContent;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            
            button.classList.add('copied');
            copyText.textContent = 'Cop';
            setTimeout(function() {
                button.classList.remove('copied');
                copyText.textContent = 'Copy';
            }, 2000);
        });
    }
}

// Scroll to top functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show/hide scroll to top button
window.addEventListener('scroll', function() {
    const scrollButton = document.querySelector('.scroll-to-top');
    if (window.pageYOffset > 300) {
        scrollButton.classList.add('visible');
    } else {
        scrollButton.classList.remove('visible');
    }
});

// Video carousel autoplay when in view
function setupVideoCarouselAutoplay() {
    const carouselVideos = document.querySelectorAll('.results-carousel video');
    
    if (carouselVideos.length === 0) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const video = entry.target;
            if (entry.isIntersecting) {
                // Video is in view, play it
                video.play().catch(e => {
                    // Autoplay failed, probably due to browser policy
                    console.log('Autoplay prevented:', e);
                });
            } else {
                // Video is out of view, pause it
                video.pause();
            }
        });
    }, {
        threshold: 0.5 // Trigger when 50% of the video is visible
    });
    
    carouselVideos.forEach(video => {
        observer.observe(video);
    });
}

document.addEventListener('DOMContentLoaded', function () {
  try {
    var options = {
      slidesToScroll: 1,
      slidesToShow: 1,
      loop: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 5000,
    };

    if (window.bulmaCarousel && typeof bulmaCarousel.attach === 'function') {
      bulmaCarousel.attach('.carousel', options);
    }
    if (window.bulmaSlider && typeof bulmaSlider.attach === 'function') {
      bulmaSlider.attach();
    }
    setupVideoCarouselAutoplay();
  } catch (e) {
    console.warn('[init] carousel/slider init skipped:', e);
  }
});


/* ===== Render 5-wide demo rows ===== */
/* ===== Render 5-wide demo rows ===== */
/* ===== Render 5-wide demo rows ===== */
(function(){
  const PRELOAD = 'metadata'; // 重い時は 'none' に

  function mk(tag, cls, html){
    const el = document.createElement(tag);
    if (cls) el.className = cls;
    if (html) el.innerHTML = html;
    return el;
  }

  function render(){
    const container = document.getElementById('demo-grid');
    if (!container || !Array.isArray(window.DEMO_DATA)) return;

    container.innerHTML = ''; // 二重描画防止

    window.DEMO_DATA.forEach((row, idx) => {
      const sec  = mk('section','demo-row');
      const head = mk('div','demo-row-head');
      head.appendChild(mk('div','demo-row-title', row.title || `Sample ${idx+1}`));
      sec.appendChild(head);

      const grid = mk('div','grid-5');
      (row.files || []).forEach(item => {
        const fig  = mk('figure','video-cell');
        const wrap = mk('div','video-wrap');
        const v    = document.createElement('video');
        v.setAttribute('controls','');
        v.setAttribute('playsinline','');
        v.setAttribute('preload', PRELOAD); // クリックで音が鳴る（autoplay/mutedは付けない）
        const s = document.createElement('source');
        s.src  = item.src;  s.type = 'video/mp4';
        v.appendChild(s);
        wrap.appendChild(v);
        fig.appendChild(wrap);
        fig.appendChild(mk('figcaption','cell-cap', item.label || ''));
        grid.appendChild(fig);
      });

      sec.appendChild(grid);
      container.appendChild(sec);
    });

    // 画面外ビデオは自動ポーズ（軽量化）
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(entries => {
        entries.forEach(e => { const v = e.target; if (!e.isIntersecting && !v.paused) v.pause(); });
      }, { threshold: 0.2 });
      container.querySelectorAll('video').forEach(v => io.observe(v));
    }
  }

  // DEMO_DATA が先でも後でも描画されるように二段構え
  document.addEventListener('DOMContentLoaded', () => {
    if (Array.isArray(window.DEMO_DATA)) render();
    else window.addEventListener('load', render, { once:true });
  });
})();


// ===== Render PDFs as images (no viewer frame) =====
document.addEventListener('DOMContentLoaded', async () => {
  if (!window['pdfjsLib']) return;
  const CMAP = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.5.136/cmaps/';
  pdfjsLib.GlobalWorkerOptions.workerSrc =
    'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.5.136/pdf.worker.min.js';

  const nodes = document.querySelectorAll('.pdf-as-img');
  for (const el of nodes) {
    try {
      const url = el.dataset.src;
      const pageNum = parseInt(el.dataset.page || '1', 10);
      const pdf = await pdfjsLib.getDocument({ url, cMapUrl: CMAP, cMapPacked: true }).promise;
      const page = await pdf.getPage(pageNum);
      const scale = 2; // 2xで高解像度（必要なら3に）
      const viewport = page.getViewport({ scale });

      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = Math.ceil(viewport.width);
      canvas.height = Math.ceil(viewport.height);

      await page.render({ canvasContext: ctx, viewport }).promise;

      const img = new Image();
      img.src = canvas.toDataURL('image/jpeg', 0.9);
      img.alt = el.dataset.alt || '';
      img.loading = 'lazy';
      img.style.width = '100%';
      img.style.height = 'auto';

      el.replaceWith(img);
    } catch (e) {
      console.warn('PDF render failed:', e);
    }
  }
});

/* ===== Figures carousel init (Bulma Carousel) ===== */
document.addEventListener('DOMContentLoaded', function () {
  if (!(window.bulmaCarousel && typeof bulmaCarousel.attach === 'function')) return;

  const common = {
    slidesToScroll: 1,
    slidesToShow: 1,
    loop: true,
    infinite: true,
    navigation: true,  
    pagination: true, 
    autoplay: true,  
    duration: 5000,  
    pauseOnHover: true,
  };

  // Figures
  bulmaCarousel.attach('#fig-carousel', common);

  // Training/Sampling/Latency
  bulmaCarousel.attach('#fig-carousel-2', common);
});


