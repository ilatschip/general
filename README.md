# Ilana Tschiptschin — Portfolio

A minimal, static one-page portfolio. No build step — just HTML, CSS and
vanilla JS.

## Structure

```
index.html      Page shell: header + containers for projects and the info panel
css/style.css   All styling
js/main.js      Project data + rendering, info panel open/close
images/         Put your project photos here
```

## Layout

- **Header** — fixed at the top, shows only the name ("Ilana Tschiptschin")
  and an "Info" button. It stays legible over any image thanks to
  `mix-blend-mode: difference`.
- **Projects** — each project is a full-width, full-height block. The
  title and a short info line sit at the bottom-left of the image, over a
  dark gradient for legibility. Projects stack one after another, each
  behaving the same way.
- **Info** — clicking "Info" slides in a panel with a bio and contact
  links, instead of navigating to a separate page.

## Editing content

Open `js/main.js` and edit the `projects` array:

```js
{
  title: 'Project Name',
  info: 'Category — 2024',
  image: 'images/project-name.jpg', // leave '' to show a placeholder
  color: '#8a7f76',                 // placeholder background if no image
}
```

Add or remove objects to add/remove projects — the page re-renders itself
from this list, so you don't need to touch the HTML or CSS.

Edit the bio, email, phone and social links directly in `index.html`
inside `<div class="info-panel__content">`.

## Running locally

Any static file server works, e.g.:

```
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Deploying

This is plain static output, so it can be hosted as-is on GitHub Pages,
Netlify, Vercel, or any static host — just point it at the repository
root.
