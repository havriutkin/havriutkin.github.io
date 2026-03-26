---
layout: post
title: "Getting Started with Jekyll"
date: 2025-02-05 10:00:00 +0000
tags: [jekyll, tutorial, web]
excerpt: "A practical intro to Jekyll — how it works, how to set it up, and how to deploy to GitHub Pages in under 30 minutes."
---

Jekyll is a static site generator that converts Markdown files into a complete website. It's the engine powering this site, and it integrates seamlessly with GitHub Pages.

## Why Jekyll?

- **No server required** — GitHub Pages hosts the generated HTML for free
- **Markdown-based** — write posts in plain text, no CMS needed
- **Templating** — reuse layouts and components across pages
- **Fast** — static HTML loads instantly

## Installation

You need Ruby installed, then:

```bash
gem install bundler jekyll
jekyll new my-site
cd my-site
bundle exec jekyll serve
```

Open `http://localhost:4000` — you have a running site.

## Project structure

```
my-site/
├── _config.yml      # site settings
├── _posts/          # blog posts (YYYY-MM-DD-title.md)
├── _layouts/        # page templates
├── _includes/       # reusable HTML fragments
├── assets/          # CSS, images, JS
└── index.md         # home page
```

## Deploying to GitHub Pages

1. Push your Jekyll site to a repo named `<username>.github.io`
2. In repo **Settings → Pages**, choose the branch to deploy
3. GitHub builds and publishes the site automatically on every push

That's it — your site is live at `https://<username>.github.io`.

## Next steps

- Customise `_config.yml` with your site title and description
- Write your first post in `_posts/`
- Add your own CSS in `assets/css/main.css`
