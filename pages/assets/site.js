(() => {
  const root = document.documentElement;
  const themeButtons = document.querySelectorAll('[data-theme-choice]');
  const scrollTopButton = document.querySelector('[data-scroll-top]');
  const storageKey = 'learning-site-theme';

  const applyTheme = (choice) => {
    if (choice === 'light' || choice === 'dark') {
      root.dataset.theme = choice;
    } else {
      delete root.dataset.theme;
      choice = 'system';
    }

    themeButtons.forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.themeChoice === choice));
    });
  };

  let savedTheme = 'system';
  try {
    savedTheme = localStorage.getItem(storageKey) || 'system';
  } catch (_error) {
    savedTheme = 'system';
  }
  applyTheme(savedTheme);

  themeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const choice = button.dataset.themeChoice;
      applyTheme(choice);
      try {
        localStorage.setItem(storageKey, choice);
      } catch (_error) {
        // Theme still applies for the current page when storage is unavailable.
      }
    });
  });

  if (scrollTopButton) {
    const updateScrollButton = () => {
      scrollTopButton.classList.toggle('is-visible', window.scrollY > 320);
    };

    window.addEventListener('scroll', updateScrollButton, { passive: true });
    updateScrollButton();
    scrollTopButton.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
})();
