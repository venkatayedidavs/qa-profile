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

  const progressRoot = document.querySelector('[data-progress-key]');
  if (progressRoot) {
    const progressKey = `learning-site-progress:${progressRoot.dataset.progressKey}`;
    const boxes = [...progressRoot.querySelectorAll('input[type="checkbox"][data-task]')];
    const bar = progressRoot.querySelector('[data-progress-bar]');
    const label = progressRoot.querySelector('[data-progress-label]');

    let done = {};
    try {
      const saved = JSON.parse(localStorage.getItem(progressKey));
      done = saved && typeof saved === 'object' ? saved : {};
    } catch (_error) {
      done = {};
    }

    const renderProgress = () => {
      const checked = boxes.filter((box) => box.checked).length;
      if (bar) {
        bar.max = boxes.length;
        bar.value = checked;
      }
      if (label) {
        label.textContent = `${checked} of ${boxes.length} tasks done. Progress is saved in this browser.`;
      }
      progressRoot.querySelectorAll('[data-day]').forEach((day) => {
        const dayBoxes = [...day.querySelectorAll('input[data-task]')];
        const status = day.querySelector('[data-day-status]');
        if (status) {
          status.textContent = `${dayBoxes.filter((box) => box.checked).length}/${dayBoxes.length}`;
        }
      });
    };

    boxes.forEach((box) => {
      box.checked = done[box.dataset.task] === true;
      box.addEventListener('change', () => {
        if (box.checked) {
          done[box.dataset.task] = true;
        } else {
          delete done[box.dataset.task];
        }
        try {
          localStorage.setItem(progressKey, JSON.stringify(done));
        } catch (_error) {
          // Progress still shows for the current page when storage is unavailable.
        }
        renderProgress();
      });
    });
    renderProgress();
  }

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
