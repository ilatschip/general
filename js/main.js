/**
 * Project list.
 *
 * To add a project: add an object to this array. To use a real photo,
 * set `image` to its path (e.g. "images/my-project.jpg") — it will be
 * rendered as a full-width <img>. Leave `image` empty/undefined and a
 * placeholder block (in `color`) is shown instead, so you can lay out
 * the page before the final images are ready.
 */
const projects = [
  {
    title: 'Project One',
    info: 'Category — 2024',
    image: '',
    color: '#8a7f76',
  },
  {
    title: 'Project Two',
    info: 'Category — 2023',
    image: '',
    color: '#5c6b73',
  },
  {
    title: 'Project Three',
    info: 'Category — 2023',
    image: '',
    color: '#7a6a53',
  },
  {
    title: 'Project Four',
    info: 'Category — 2022',
    image: '',
    color: '#4f5d4e',
  },
];

function renderProjects() {
  const container = document.querySelector('[data-projects]');
  if (!container) return;

  container.innerHTML = projects
    .map((project, index) => {
      const media = project.image
        ? `<img class="project__media" src="${project.image}" alt="${escapeHtml(project.title)}" loading="${index === 0 ? 'eager' : 'lazy'}" />`
        : `<div class="project__media project__media--placeholder" style="background:${project.color || '#333'}">
             ${escapeHtml(project.title)} — add image
           </div>`;

      return `
        <article class="project">
          ${media}
          <div class="project__scrim"></div>
          <div class="project__caption">
            <h2 class="project__title">${escapeHtml(project.title)}</h2>
            <p class="project__info">${escapeHtml(project.info)}</p>
          </div>
        </article>
      `;
    })
    .join('');
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function setupInfoPanel() {
  const toggle = document.querySelector('[data-info-toggle]');
  const closeBtn = document.querySelector('[data-info-close]');
  const panel = document.querySelector('[data-info-panel]');
  const backdrop = document.querySelector('[data-info-backdrop]');

  if (!toggle || !panel || !backdrop) return;

  const open = () => {
    panel.setAttribute('data-open', '');
    backdrop.setAttribute('data-open', '');
    panel.setAttribute('aria-hidden', 'false');
    toggle.setAttribute('aria-expanded', 'true');
  };

  const close = () => {
    panel.removeAttribute('data-open');
    backdrop.removeAttribute('data-open');
    panel.setAttribute('aria-hidden', 'true');
    toggle.setAttribute('aria-expanded', 'false');
  };

  toggle.addEventListener('click', () => {
    const isOpen = panel.hasAttribute('data-open');
    isOpen ? close() : open();
  });

  closeBtn?.addEventListener('click', close);
  backdrop.addEventListener('click', close);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });
}

renderProjects();
setupInfoPanel();
