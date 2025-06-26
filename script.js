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
