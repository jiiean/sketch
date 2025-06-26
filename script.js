document.addEventListener('DOMContentLoaded', () => {
  const langBtn = document.getElementById('lang-btn');
  const dropdown = langBtn.parentElement;

  langBtn.addEventListener('click', () => {
    dropdown.classList.toggle('show');
  });

  window.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove('show');
    }
  });

  const elementsToTranslate = {
    navAbout: document.getElementById('about-link'),
    navDiscover: document.getElementById('discover-link'),
    tagline: document.querySelector('.tagline'),
    navCenter: document.querySelector('.nav-center'),
    btnSignUp: document.querySelector('.btn.dark-btn'),
    btnQuickStart: document.querySelector('.btn.white-btn'),
  };

  const translations = {
    en: {
      navAbout: "ABOUT",
      navDiscover: "DISCOVER",
      tagline: "An AI generative tool that can instantly transform 2D design into 3D model",
      navCenter: "Sketch3D.ai",
      btnSignUp: "Sign Up",
      btnQuickStart: "Quick Start"
    },
    中文: {
      navAbout: "关于",
      navDiscover: "探索",
      tagline: "一个可以即时将2D设计转换为3D模型的AI生成工具",
      navCenter: "Sketch3D.ai",
      btnSignUp: "注册",
      btnQuickStart: "快速开始"
    }
  };

  document.getElementById('lang-menu').addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target.tagName === 'A') {
      const selectedLang = event.target.getAttribute('data-lang');

      langBtn.textContent = selectedLang.toUpperCase() + ' ▾';

      const texts = translations[selectedLang];
      for (const key in texts) {
        if (elementsToTranslate[key]) {
          elementsToTranslate[key].textContent = texts[key];
        }
      }

      dropdown.classList.remove('show');
    }
  });

  elementsToTranslate.navAbout.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('ABOUT clicked!');
    alert('ABOUT clicked!');
  });

  elementsToTranslate.navDiscover.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('DISCOVER clicked!');
    alert('DISCOVER clicked!');
  });

  elementsToTranslate.btnSignUp.addEventListener('click', () => {
    console.log('Sign Up clicked!');
    alert('Sign Up clicked!');
  });

  elementsToTranslate.btnQuickStart.addEventListener('click', () => {
    console.log('Quick Start clicked!');
    alert('Quick Start clicked!');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const navCenter = document.querySelector('.nav-center');
  const navLeft = document.querySelector('.nav-left');

  function updateMobileNavLinks() {
    const mobileWidth = 600;
    if (window.innerWidth <= mobileWidth) {
      if (!document.querySelector('.nav-center + .mobile-nav-left')) {
        const mobileNavLeft = document.createElement('div');
        mobileNavLeft.className = 'mobile-nav-left';
        mobileNavLeft.style.display = 'flex';
        mobileNavLeft.style.justifyContent = 'center';
        mobileNavLeft.style.gap = '20px';
        mobileNavLeft.style.marginTop = '10px';

        navLeft.querySelectorAll('a').forEach(link => {
          const clone = link.cloneNode(true);
          clone.style.textDecoration = 'none';
          clone.style.color = 'black';
          clone.style.transition = 'transform 0.3s ease, text-decoration 0.3s ease';
          clone.onmouseenter = () => {
            clone.style.transform = 'scale(1.1)';
            clone.style.textDecoration = 'underline';
          };
          clone.onmouseleave = () => {
            clone.style.transform = 'scale(1)';
            clone.style.textDecoration = 'none';
          };
          clone.addEventListener('click', e => {
            e.preventDefault();
            console.log(`${clone.textContent} clicked!`);
            alert(`${clone.textContent} clicked!`);
          });
          mobileNavLeft.appendChild(clone);
        });

        navCenter.insertAdjacentElement('afterend', mobileNavLeft);
      }
      navLeft.style.display = 'none';
    } else {
      const mobileNavLeft = document.querySelector('.mobile-nav-left');
      if (mobileNavLeft) {
        mobileNavLeft.remove();
      }
      navLeft.style.display = 'flex';
    }
  }

  updateMobileNavLinks();
  window.addEventListener('resize', updateMobileNavLinks);
});
